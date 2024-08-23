import React from 'react'

function Nav() {
  return (
    <nav className="w-[15%] h-full bg-zinc-200 shadow border  flex flex-col items-center pt-5 ">
    <a href="" className="py-2 px-5 border border-black ">
      Add new Product.
    </a>
    <hr className="my-3 w-[80%] " />
    <h1 className="text-2xl font-semibold">Category Filter</h1>

    <ul className="w-[80%] ">
      <li className="flex items-center m-2 gap-2">
        <span className="w-[15px] h-[15px]  block rounded-full bg-blue-400 "></span>
        Cat1
      </li>
    </ul>
  </nav>

  )
}

export default Nav