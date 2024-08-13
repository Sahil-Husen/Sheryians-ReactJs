import { useState, useRef } from "react";
import { useForm } from 'react-hook-form';
import "./App.css";

function App() {
  function handleSubmits(event) {
    event.preventDefault();

    console.log(name.current.value, age.current.value, email.current.value);
  }
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);




  // Controlled Components using UseState
   const [val,setVal] =  useState({name:'',email:''})
  function handleChange(event){
      setVal({name:event.target.value,email:event.target.value})
  }
  function handleSubmitSecond(event){
    event.preventDefault();
    console.log(val)
  }

  // React Hook Form example
   const {register,handleSubmit} = useForm();
   
  
  return (
    <>
     <div className="p-4">
     <div>
        <h1 className="text-center text-lg font-bold text-xl">Form handling Ways</h1>
        <ul>
          <li>
            <h1>1Way</h1>
            <div>
              <form action="" className="p-5" onSubmit={handleSubmits}>
                <input className="bg-blue-950 text-white m-5" type="text" ref={name} placeholder="Enter name" />
                <input className="bg-blue-950 text-white m-5" type="text" ref={age} placeholder="Enter name" />
                <input className="bg-blue-950 text-white m-5" type="text" ref={email} placeholder="Enter name" />
                <input className="bg-blue-200 py-2 px-3 rounded-md" type="submit" value="Submit" />
              </form>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <ul>
           <h1>2Way</h1>
           <h2>Controlled Components using UseState</h2>
            <form action="" onSubmit={handleSubmitSecond}>
              <input onChange={handleChange} className="bg-blue-950 text-white m-5" type="text" placeholder="enter anything"/>
              <input onChange={handleChange} className="bg-blue-950 text-white m-5" type="text" placeholder="enter anything"/>
              <input  className="bg-blue-200 py-2 px-3 rounded-md"  type="submit" value="Submit" />
            </form>
        </ul>
      </div>

      <div>
        <h1>3-Way</h1>
        <p>First:Install React hook form</p>
        <form action="" onSubmit={handleSubmit(data =>console.log(data))}>
          <input {...register('name')} type="text" placeholder="name" />
          <input {...register('email')} type="text" placeholder="email" />
          <input type="submit" value="submit" />
        </form>
     
      </div>


     </div>
    </>
  );
}

export default App;
