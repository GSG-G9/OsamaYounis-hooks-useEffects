import { useState, useEffect } from 'react';

function ExerciseFive() {
  const [data, setData] = useState({id: 0, name: '', username: '', email: '', city:'', phone:'', website: ''})
  const [edit, setEdit] = useState('')

  useEffect(()=>{
    const abortController = new AbortController();
     fetch(`https://jsonplaceholder.typicode.com/users`,{ signal: abortController.signal })
      .then(res => res.json())
      .then((data)=>{
        const user = data[Math.floor(Math.random() * data.length-1)]
        const {id, name, username, email, address:{city}, phone, website} = user
        setData({id, name, username, email, city, phone, website})
      })  
      .catch((e)=>{
        if (e.name === 'AbortError') {
          return console.log('request was cancelled');
        }
        console.log(e)
      })
    return () => abortController.abort()
  },[])

  const onSpanClick = (e)=>{
    setEdit(e.target.id)
  }
  const setDataInInputByKey = (e, key)=>{
    setData({...data ,[key]:e.target.value})
  }
  
  return (
    <div id={data.id}>
      <img src={`https://robohash.org/${data.username}`} height='150' alt='username'/>

      {Object.keys(data).map((key, i) =>{
        if(i === 0) return null 
        return(
        <p key={key}>{key+ ": "} 
          {(edit !== key)
          ?
            <span id={key} onClick={onSpanClick}>
              {data[key]}
            </span>
          :
            <input 
            value={data[key]} 
            onBlur={(e)=>{
              setEdit('')
            }}
            onChange={(e)=>{
              setDataInInputByKey(e ,key )
              console.log(e.target.focus());
            }}
            autoFocus
            />
          }
        </p>
      )})}
    </div> 
);
}

export default ExerciseFive;

