import React from "react";
import { useState } from "react";

function Array1() {
//   const [count, setCount] = useState([1, 2, 3, 4, 5]);
const[val,setVal] = useState([
    {name:'sahil',age:21},{name:'wasim gandu',age:24}
]) 


return (
    <div className="px-5">
      <h1>Hello! This is 2nd Part of the Array</h1>
    {val.map((item)=><h1>{item.name} {item.age} </h1>)}
      {/* <button onClick={()=>setCount(()=>count.filter((item,index)=>index!=2))}>
            Remove items
        </button> */}

    {/* adding item to Array */}
      {/* <button
        onClick={() => setCount(() => count.filter((item) => item % 2 !== 0))}
        className="bg-blue-600 text-white py-3 px-3 rounded-full"
      >
        Click me
      </button> */}

      {/* <button 
      onClick={() =>setCount([...count,7])}
      
      className="bg-blue-600 text-white py-3 px-3 rounded-full">
        Add item
      </button> */}

    {/* Changing name or age OnClick */}

    <button onClick={()=>setVal(()=>val.map(item => item.name === 'wasim gandu' ? ({name:'wasim',age:30}): item))} 
        
        className="bg-blue-500 text-white rounded-full py-3 px-3"
        >Click me</button>

    </div>
  );
}

export default Array1;
