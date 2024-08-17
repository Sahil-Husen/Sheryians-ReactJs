import "./App.css";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import {useState}  from 'react'

function App() {
  const [users, setUsers] = useState([])


  // ye data receive kr raha hai aur setUsers ko send kr raha hai
  const handleFormSubmitData = (data)=>{
    // setUsers joki ek array hai toh hame yaha 1 arrray receive krna hai
        setUsers([...users,data])
  }

  const handleRemove = (id)=>{
    setUsers(()=>users.filter((item,index)=>index!=id))
  }


  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
