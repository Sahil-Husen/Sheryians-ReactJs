import { useState } from "react";

import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1601892667402-d118d5f21af3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fG9tYW58ZW58MHx8MHx8fDA%3D",
      name: "Sahil Hussain",
      artist: "Afridi",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1674754429307-c335e00125f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBoaWxpcHBpbmVzfGVufDB8fDB8fHww ",
      name: "Kaleem ",
      artist: "RR Rao",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1699904168280-f53046891ce6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG9tYW58ZW58MHx8MHx8fDA%3D",
      name: "Wasim ",
      artist: "KK Shah",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1657523389944-ddb71944bb72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG9tYW58ZW58MHx8MHx8fDA%3D",
      name: "Javed Bhoi",
      artist: "Allu Aftab",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1668508533895-dad5e52ed353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fG9tYW58ZW58MHx8MHx8fDA%3D",
      name: "Ayub Shaikh",
      artist: "Minsaf",
      added: false,
    },
  ];

  const[songData,setData]  = useState(data)

  const handleClick = (index) =>{
     setData(((prev)=>{
      return prev.map((item,itemIndex) =>{
        if(itemIndex === index) return{...item,added:!item.added}

        return item;
      })
     }))
  }


  return (
    <>
      <div className="w-full h-screen bg-zinc-300  ">


        <Navbar data={songData} />

        <div className="px-10 flex gap-10 mt-5 flex-wrap">
          {songData.map((obj,index) => {

            return <Card key={index} data={obj} handleClick={handleClick}  index={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
