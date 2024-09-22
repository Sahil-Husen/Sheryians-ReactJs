import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
const Button = () => {
  return (
    <div className='min-w-40 px-3 py-2 bg-zinc-200 rounded-full text-black text-center flex justify-between items-center gap-2'>
      <span className='text-sm font-regular font-semibold'>Get Started</span>
      <IoIosReturnRight></IoIosReturnRight>
    </div>
  )
}

export default Button