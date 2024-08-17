// import React from "react";
import Card from "./Card";

function Cards({users,handleRemove}) {

  return (
    <div className="w-full    max-h-96  overflow-auto bg-sky-200 p-4 rounded-md flex justify-center items-center gap-4 flex-wrap ">
      {
        users.map((item,index)=>{
          return  <Card  id={index} handleRemove={handleRemove} user={item} key={index}  />
        })
      }
    </div>
  );
}

export default Cards;
