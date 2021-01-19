import fetch from "node-fetch";
import { useState, useEffect } from 'react';

function ExerciseThere() {
  const [input ,setInput] = useState('ginshin impact')
  const [result ,setResult] = useState('')

  useEffect(()=>{
    const abortController = new AbortController();
     fetch(`https://api.giphy.com/v1/gifs/search?&q=${input}&api_key=9ORBwKBYGsfg2eTAJDFa9EEFEBEickKE&limit=2`,{ signal: abortController.signal })
      .then(res => res.json())
      .then(({data})=>{
        setResult(data[0].images.original.url)
      })  
      .catch((e)=>{
        if (e.name === 'AbortError') {
          return console.log('request was cancelled');
        }
        console.log(e)
      })
    return () => abortController.abort()
  },[input])

  const inputHandler = (e) => {
    const inputValue = e.target.value
    setInput(inputValue)
   
  }   

  return (
    <div >
      <input type="text" value={input} onChange={inputHandler}/>
      <div>
        <img src={result} alt="gif" />
      </div>
    </div>
  );
}

export default ExerciseThere;
