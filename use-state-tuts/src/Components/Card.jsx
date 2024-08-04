import React from "react";

function Card({ values, handleClick,index}) {
  const { image, name, profession,friends } = values;

  return (
    <div className="w-52 bg-white rounded-md  overflow-hidden ">
      <div className="w-full h-32 bg-sky-200">
        <img className="w-full object-cover h-full" src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <h3>{name}</h3>
        <h5>{profession}</h5>
        <button
          onClick={()=>handleClick(index)}
          className="bg-blue-400 text-white rounded-md py-2 px-2 mt-4"
        >
          {/* Add Friend */}
          {friends ? 'Add friends' : 'Remove Friend'}
        </button>
      </div>
    </div>
  );
}

export default Card;
