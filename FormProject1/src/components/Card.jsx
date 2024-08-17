import React from 'react'

function Card({users,handleRemove,id}) {
  return (      
    <div className='bg-blue-100 w-40 m-5 rounded-md '>
        <div className='w-full  p-3 rounded-md'>
            <img className='object-cover w-full rounded-md' src={users.image} alt="" />
        </div>
        <div>
            <h1 className='font-semibold text-xl'>{users.name} </h1>
            <h3 className='opacity-40 font-semibold '>{users.email} </h3>
            <button onClick={()=>handleRemove(id)} className='py-2 px-3 bg-blue-400 m-2 rounded-lg'>Remove It</button>
        </div>
    </div>
  )
}

export default Card