import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'
import {Link } from 'react-router-dom'



function UserDetails() {

  const {user} = useContext(UserContext);
  // this is the way to use Context in any component 

  
  return (

     <div className='flex flex-col'>
      
      <h1>Users</h1>
      {user.map(u=> <Link key={u.id} to="/user/:`${u.id}`"   className='bg-blue-600 w-1/2  mb-2 text-white p-5 m-auto'>
      {u.name}</Link>)}
    
     </div>
  )
}

export default UserDetails