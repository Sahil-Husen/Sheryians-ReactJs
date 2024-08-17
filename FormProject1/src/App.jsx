import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const formHandle = (data) =>{
      setUsers([...users,data])
  }   


 const handleRemove = (id) =>{
  setUsers(()=>users.filter((item,index)=>{
    return index!=id;
  }))
 }  

  return (
    <div>
      <Cards users={users}  handleRemove={handleRemove} />
      <Form formHandle={formHandle}  />
    </div>
  );
}

export default App;
