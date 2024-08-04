import React from "react";

function PropsCard({Values,handleClick,cardIndex}) {

  const{image,name,profession,friends} = Values;  // this is destructring og the object into individual variables

  return (
    <div className="w-52 bg-white rounded-md  overflow-hidden ">
      <div className="w-full h-32 bg-sky-200">
        <img className="w-full object-cover h-full" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button  onClick={()=>handleClick(cardIndex)}  className=" mt-4 py-3 px-3 bg-blue-500 text-xs text-white rounded-md">
         {/* Add Friend   */}
         {friends ? 'Remove Friend' :" Add friend"}
        </button>
      </div>
    </div>
  );
}

export default PropsCard;
