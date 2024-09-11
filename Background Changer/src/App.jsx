 import {useState} from 'react';
 
import './App.css'

function App() {
 
  const [color,setColor] = useState('olive')
  const [textColor,setTextColor] = useState('black')

 

  return (
    <div className='h-[100vh] bg-cyan-500 flex justify-center' style={{backgroundColor : color, color:textColor , fontSize: ''}} >
      <div className='text-xl flex flex-row gap-10 '>
      <button className='bg-white h-fit font-semibold rounded-md py-2 px-3' onClick={()=>setColor('skyblue')}>SkyBlue</button>
      <button className='bg-white h-fit font-semibold rounded-md py-2 px-3' onClick={()=>setColor('green')}>Green</button>
      <button className='bg-white h-fit font-semibold rounded-md py-2 px-3' onClick={()=>setColor('beige')}>Beige</button>
      <button className='bg-white h-fit font-semibold rounded-md py-2 px-3' onClick={()=>setColor('cyan') }>Cyan</button>
      
      </div>
    
    </div>
  )
}

export default App
