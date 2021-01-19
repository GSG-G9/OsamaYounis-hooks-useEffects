import { useState, useEffect} from 'react';

function ExerciseOne() {
  const [count ,setCount] = useState(0)

  useEffect(()=>{
    document.addEventListener('mousedown', incrementCount)
    return () => document.removeEventListener('mousedown', incrementCount)
  },[count])

  const incrementCount = () => {
    setCount((count)=>count+1)
  }
  return (
    <div className="">
      <span>{count}</span>
    </div>
  );
}

export default ExerciseOne;
