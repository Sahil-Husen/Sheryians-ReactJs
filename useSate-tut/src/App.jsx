
import './App.css'
// import useState from 'react'
import { useState } from'react'
function App() {
  
 const[score,setScore] = useState(false);

  function handleOnClick(){
    
    setScore(!score)
  }

  return (
    <>
    <h1>hello</h1>
        <p>{score.toString()}</p>

        <lbutton onClick={handleOnClick}>Set Score</lbutton>     

    </>
  )
}

export default App
