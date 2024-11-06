import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByCount,
} from "./Features/Counter/CounterSlice";

function App() {
  const [input, setInput] = useState("");
  const set = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-xl font-bold ">Redux Counter</h1>
      <div className="  font-mono text-xl flex flex-col gap-10  border-2 border-black  h-52 p-10 rounded-xl  items-center justify-center">
        <div className="flex gap-10">
          <button onClick={()=>dispatch(increment())} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              +
            </div>
          </button>
          <div className="bg-white w-full h-full border-2 p-2 rounded-sm">
            {set}
          </div>
          <button onClick={()=>dispatch(decrement())} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              -
            </div>
          </button>
        </div>
        <div className="flex gap-10">
          <input
            placeholder="Enter value..."
            className="border-2 outline-none border-black rounded-xl p-2  w-[10rem]"
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={()=>dispatch(incrementByCount(Number(input) || 0))} className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
              Add Value
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
