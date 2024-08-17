import React from "react";
import {useForm, useFormState} from 'react-hook-form'


function Form({handleFormSubmitData}) {
  
   const {register,handleSubmit,reset } =   useForm()
   const handleFormSubmit  = (data)=> {
    handleFormSubmitData(data);
    reset();
   }
  
  return (
    <div className="mt-10 flex justify-center gap-5 ">
      <form onSubmit={handleSubmit(handleFormSubmit) } className="flex gap-5">

    {/* yaha child components se data parent ko send krna hai to HUm Parent component me 1 Function banayenge aur child me pass kr ke use ya data ko sent kr denge */}
    {/* Go to app component */}

        <input
        {...register('name')}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="name"
        />
        <input
        {...register('email')}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="email"
        />
        <input
        {...register('image')}
          className="rounded-md px-2 py-1 text-base font-semibold outline-none"
          type="text"
          placeholder="imgae url"
        />
        <input
          type="submit"
          value="submit"
          className="px-3 py-2 bg-blue-400 text-white rounded-md font-semibold"
        />
      </form>
    </div>
  );
}

export default Form;
