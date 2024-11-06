import React, { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,incrementByCount } from "./Features/Counter/CounterSlice";

function App() {
  const [input, setInput] = useState("");
 const set = useSelector((state)=> state.counter.value);
 const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-10 bg-slate-700 h-screen w-screen items-center justify-center">
      <div className="flex gap-10">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={()=>dispatch(incrementByCount(Number(input)|| 0))} className="py-2 px-3 bg-blue-400 rounded-xl">
          Increment by Value
        </button>
      </div>
      <div className="flex gap-10">
        <button onClick={()=>dispatch(increment())} className="py-2 px-3 bg-blue-400 rounded-xl">Increment</button>
        <div className="bg-white w-full h-full border-2 p-2">{set}</div>
        <button onClick={()=>dispatch(decrement())} className="py-2 px-3 bg-blue-400 rounded-xl">Decrement</button>
      </div>
    </div>
  );
}

export default App;
