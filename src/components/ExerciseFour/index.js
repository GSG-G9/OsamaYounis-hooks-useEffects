import { useState, useEffect } from 'react';

function ExerciseFour() {
  const [input ,setInput] = useState('The Void ツ.')
  const [result ,setResult] = useState('')

  useEffect(()=>{
    setResult(`https://robohash.org/${input}`)
  },[input])

  const inputHandler = (e) => {
    const inputValue = e.target.value
    setInput(inputValue)
  }   

  return (
    <div >
      <input type="text" value={input} onChange={inputHandler}/>
      <div>
        <img src={result} alt="roboHash" />
      </div>
    </div>
  );
}

export default ExerciseFour;
