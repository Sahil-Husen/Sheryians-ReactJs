import React from "react";

function Card({ data, handleClick,index }) {
  // Destructuring of data
  const { image, name, artist, added } = data;

  return (
    <div className=" relative w-72 bg-zinc-100 p-5 rounded-md flex gap-5 pb-8 mt-7">
      <div className="w-32 h-32 bg-orange-600 rounded-md overflow-hidden">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="text-xl  leading-none font-semibold">{name}</h3>
        <h6 className="text-sm">{artist}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`whitespace-nowrap translate-y-[50%] -translate-x-[50%]  left-1/2 px-4 py-3 ${
          added ? "bg-teal-400" : "bg-orange-400"
        } bottom-0 absolute text-xs text-white rounded-full`}
      >
        {added === false ? "Add to Favorite" : "Added"}
      </button>
    </div>
  );
}

export default Card;
