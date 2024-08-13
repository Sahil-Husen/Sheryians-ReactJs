// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

// import Array1 from './Components/Array1'
// import Array from './Components/array'
// import Array2 from './Components/Array2'
// import CreatingSomthing from './Components/CreatingSomthing'
// import PropsCard from "./Components/PropsCard";
import Card from "./Components/Card";
function App() {
  // const [val,setVal] = useState({name:'sahil',age:21,isBanned:false})
  // function handleClick(){
  //   setVal({...val,name:'sahil husen'})
  //   setVal({...val,isBanned:!val.isBanned})
  // }

  // const [val, setVal] = useState({ name: "sahil", age: 21 });

  const data = [
    {
      name: "Sahil Husen",
      profession: "web developer",
      image:
        "https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
      friends: false,
    },
    {
      name: "Sahil Afridi",
      profession: "data anlyst",
      image:
        "https://images.unsplash.com/photo-1690383682965-faf2cf669634?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnN8ZW58MHx8MHx8fDA%3D",
      friends: false,
    },
    {
      name: "Kaleem Ahmad",
      profession: "ai engineer",
      image:
        "https://images.unsplash.com/photo-1637073849667-91120a924221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlcnN8ZW58MHx8MHx8fDA%3D",
      friends: false,
    },
    {
      name: "Wasim Akhtar",
      profession: "software engineer",
      image:
        "https://images.unsplash.com/photo-1654262609484-76d1a8f3b016?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGRldmVsb3BlcnN8ZW58MHx8MHx8fDA%3D",
      friends: false,
    },
  ];

  // const[realData,setData] = useState(data)
  //  const handleClick =(cardIndex)=>{
  //   setData((prev) =>{
  //     return prev.map((item,index) =>{
  //       if(index === cardIndex){
  //         return {...item,friends:!item.friends};
  //       }
  //       return item;
  //     })
  //   })
  //  }

  // const handleClick = (cardIndex) =>{
  //   setData((prev) =>{
  //     return prev.map((item,index) =>{
  //       if(index === cardIndex ){
  //         return{...item,friends:!item.friends}
  //       }
  //       return item;
  //     })
  //   })
  // }

  const [myData, setNewData] = useState(data);
  const handleClick = (cardIndex) => {
    setNewData((prev) => {
      return prev.map((item, index) => {
    
        if (index === cardIndex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      {/* <h2>{val.name} </h2>
      <h3>{val.isBanned.toString()} </h3>
      <button  onClick={()=>setVal({...val,isBanned:!val.isBanned})} className={`px-3 py-1 ${val.isBanned?'bg-blue-600':'bg-red-600'} text-white rounded-full`}>Click me</button>   */}
      {/* <h1>{val.name} </h1>
      <button onClick={()=>
      setVal({...val,gender:'male'},
        console.log(val)
      )}> Click Here</button> */}

      {/* This is */}
      {/* <Array/> */}
      {/* <Array1/> */}
      {/* <Array2/> */}

      {/* Creating some Projects */}
      {/* <CreatingSomthing/> */}

      {/* This is now example of Props */}

      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {/*         
      // Here in PropsCard where we are passing IMAGE,NAME,PROFESSION this is not right way.
          // Here is another way of passing props to child components.
          // Lets one value means =VALUES={}. and accept it as a props in Child components.
          // After receiving props from App.js in child component we will have to Destructure it.

          // Here is another way to Pass Props in Chil Component

          // <PropsCard  image={item.image}  name={item.name} profession={item.profession}  key={index} /> */}

        {/* {realData.map((item, index) => (
          <PropsCard key={index} cardIndex={index}  handleClick={handleClick} Values={item}   />
        ))} */}
        {myData.map((item, index) => {
          return <Card key={index} values={item} handleClick={handleClick} index={index} />;
        })}
      </div>
    </>
  );
}

export default App;
