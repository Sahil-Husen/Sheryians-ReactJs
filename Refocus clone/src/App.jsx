import { useState } from 'react'
 
import './App.css'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'

function App() {
  

  return (
  <div className='bg-zinc-900 text-white w-screen h-screen'>
    <Navbar></Navbar>
    <Work></Work>
    <Stripes></Stripes>
  </div>
  )
}

export default App
