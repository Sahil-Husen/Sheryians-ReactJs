
import React from 'react'
import {useState} from 'react'

function Array() {
    const [val,setVal]  = useState([1,2,3,4,5,6])
    const handleClick =()=>{
        // console.log('clicked');
        setVal(()=>{
          return val.filter((item,index) =>index!==val.length-1
           ) 
        })
    }

  return (
    <div className='p-5'>
        {val.map((item) =><h1> {item} </h1>)}

     {/* <button onClick={() => setVal(() =>{
       return val.filter((item,index) => 
         index!== val.length - 1)
     })}  
     className='bg-blue-500 text-white py-3 px-5 rounded-full'> 
     
     click me
     </button> */}

    <button onClick={handleClick} className='bg-blue-500 text-white rounded-full py-3 px-3'>Click me</button>
    </div>
  )
}

export default Array