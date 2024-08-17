import React from "react";
import {useForm} from 'react-hook-form'

function Form({formHandle}) {


  const{register,handleSubmit,reset}  =useForm()

    const formData =(data)=>{
        formHandle(data);
        reset();
    }



  return (
    <div className="mt-10 flex justify-center items-center">
      <form action="" onSubmit={handleSubmit(formData)} className="flex gap-5">
        <input 
        {...register('name')}
          className="border-slate-400 rounded-md px-2 py-1 text-base font-semibold  "
          type="text"
          placeholder="name"
        />
        <input 
        {...register('email')}
          className="border-slate-400 rounded-md px-2 py-1 text-base font-semibold  "
          type="text"
          placeholder="email"
        />
        <input 
        {...register('image')}
          className="border-slate-400 rounded-md px-2 py-1 text-base font-semibold  "
          type="text"
          placeholder="imageUrl"
        />

        <input className="bg-blue-400 text-white py-2 px-3 rounded-md" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
