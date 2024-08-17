function Card({user,handleRemove,id}) {

  return (
    <>
   <div className="w-52 h-full bg-zinc-100 rounded-md flex flex-col items-center p-2">
        <div className="image w-[4vw]  h-[4vw] rounded-full  bg-zinc-200 overflow-hidden">
          <img
            className="w-full object-cover rounded-full h-full"
            src={user.image}
            alt=""
          />
        </div>
        <h1 className=" mt-1 text-xl font-semibold text-center"> {user.name}</h1>
        <h3 className="opacity-40 font-xs font-semibold" >{user.email}</h3>
        <p className=" mt-2 text-center text-xs font-semibold leading-none tracking-tight">
          Lorem ipsum dolor sit amet.
          Lorem ipsum dolor sit amet.
        </p>
        <button  onClick={()=>handleRemove(id)}  className="bg-blue-950 font-semibold py-2 px-3 text-white rounded-full mt-2 ">
          Remove It
        </button>
      </div>

   </>
  );
}

export default Card;
