import { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const data = [
    {
      name: "sahil",
      profession: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1614928001197-55f0724d4ce4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D",
        friends:false,  
    },
    {
      name: "Wasim",
      profession: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzJTIwbWVufGVufDB8fDB8fHww",
        friends:false,  
    },
    {
      name: "kaleem",
      profession: "Software Engineer",
      image:
        "https://plus.unsplash.com/premium_photo-1661768522616-c2e933c84651?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvcnRyYWl0cyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        friends:false,  
    },
    {
      name: "Gandu",
      profession: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0cyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D",
        friends:false,  
    },
  ];

  const [myData, setMyData] = useState(data);
  function handleClick(cardIndex){
    console.log(cardIndex);
     setMyData((prev)=>{
      return prev.map((item,index)=>{
        if(index === cardIndex){
          // item.friends =!item.friends;  
          return {...item,  friends:!item.friends}
        }
        return item;
      })
     })
  }
  
  return (
    <>
      <div className="flex justify-evenly">
        {myData.map((item, index) => {
          console.log(index);
          return <Card key={index} cardIndex={index} item={item} handleClick={handleClick} />; // passing data to Card component as props.
        })}
        
        
      </div>
    </>
  );
}

export default App;
