import { useState, useEffect } from 'react';

function ExerciseOne() {
  const [mouseEvent ,setMouseEvent] = useState({X:0, Y:0})
  const [color ,setColor] = useState('')

  useEffect(()=>{
    document.addEventListener('mousemove', getMouse)
    
    return () => document.removeEventListener('mousemove', getMouse)
  },[])

  const getMouse = (e) => {
    const X = e.offsetX;
    const Y = e.offsetY;
    if ( X >= window.innerWidth/2 ) {
      setColor('blue')
    }else{
      setColor('red')
    }
    setMouseEvent({X,Y})
  }
  
  const style ={
    height: '100vh',
    backgroundColor:color
  } 

  return (
    <div style={style}>
      <span>I am now on X:{mouseEvent.X} and Y:{mouseEvent.Y}</span>
    </div>
  );
}

export default ExerciseOne;
