import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
 import Users from './Components/Users'
 import Products from './Components/Products.jsx'
 import Home from './Components/Home.jsx'

function App() {
  return (
    <div className='bg-zinc-200  text-center text-white text-xl'>

    <nav className='flex gap-10 justify-center items-center'>
      <Link to='/'>Home</Link>
      <Link to='/users'>Users</Link>
      <Link to='/products'>Products</Link>
    </nav>

    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/users' element={<Users/>} ></Route>
        <Route path='/products' element={<Products/>} ></Route>
    </Routes>

    </div>
  )
}

export default App