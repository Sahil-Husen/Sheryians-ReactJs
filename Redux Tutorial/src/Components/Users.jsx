import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDelete } from '../Reducer/UserReducer'
 
 
 const Users = () => {

  const dispatch = useDispatch()

   const {users} = useSelector((state)=>state.UserReducer)
  // console.log(users);

  const deleteHandler = (index)=>{
    dispatch( userDelete(index))
  }

   return (
     <div className='m-auto container bg-red-100 p-10 mt-2'>
      <h1 className='text-2xl font-bold text-red-900 mb-10'>User List</h1>
      {users.map((item,index)=>{
        return <div className='mb-10 w-fit' key={index}><h1>{item.name} <span onClick={()=>{deleteHandler(index)}} className=' cursor-pointer text-xl text-red-900 font-bold'>X</span> </h1></div>
      })}
     </div>
   )
 }
 
 export default Users