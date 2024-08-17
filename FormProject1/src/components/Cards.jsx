import React from 'react'
import Card from './Card'


function Cards({users,handleRemove}) {
  return (
    <div className=' rounded-md m-10 h-82 min-h-96 bg-cyan-500 flex gap-5 overflow-auto flex-wrap  justify-center items-center '> 
        
        {
            users.map((item,index)=>{
                return <Card users={item} id={index} key={index} handleRemove={handleRemove}  />
            })
        }
       
    </div>
  )
}

export default Cards