import React from "react";
import { useState } from "react";

function Array2() {
  const [val, setVal] = useState(false);

  return (
    <>
      <h1> {val ===false ? 'Fuck Youself' :'Knee down'} </h1>
      <button onClick={() =>setVal(() =>!val)} className="bg-blue-500 text-white py-3 px-2 rounded-full">Click me</button>

    </>
  );
}

export default Array2;
