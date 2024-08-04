import React from "react";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

function CreatingSomthing() {
  // const[val,setVal]  = useState(false);
 const[val,setVal] = useState(true)

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className=" relative w-96 h-52 bg-zinc-500 rounded-xl flex justify-center items-center overflow-hidden">
        <img
          className={`transition-all shrink-0 w-full h-full object-cover overflow-hidden ${val ? 'translate-x-40' :'translate-x-["100%"]'}  rounded-xl`}
          src="https://images.pexels.com/photos/14686355/pexels-photo-14686355.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <img
         className={`  transition-all shrink-0 w-full h-full object-cover overflow-hidden ${val ? 'translate-x-40' :'-translate-x-["100%"]'}  rounded-xl`}
          src="https://img.freepik.com/free-photo/front-view-young-male-student-wearing-black-mask-with-backpack-holding-clocks-blue-desk_140725-41159.jpg?size=626&ext=jpg&ga=GA1.1.414064050.1716662670&semt=sph"
          alt=""
        />

        <span
          onClick={()=>setVal((!val))}
          className="absolute h-10 w-10 flex justify-center items-center left-1/2 bg-[#dadada9b] rounded-full bottom-9 -translate-y-[50%] -translate-x-[50%]"
        >
          <FaLongArrowAltRight size={"1em"} />
        </span>
      </div>
    </div>
  );
}

export default CreatingSomthing;
