import React from 'react'
import { createContext,useState } from 'react'

export const UserContext = createContext();
// this is the way to use Context or passing Data without Props 
// This is called Context API

function Context(props) {

  console.log(props);
  const [user, setUser] = useState([
    {id:0,name:'sahil',email:'ahil@g',location:'ind'},
    {id:1,name:'sahil afridi',email:'Afridi@g',location:'usa'},
    {id:2,name:'Kaleem',email:'kaleem@g',location:'kerla'},
  ])

  return <UserContext.Provider value={{user,setUser}} >  {/* THIS IS THE WAY TO USE CONTEXT API IN ANY APPLICATION  */}

  {props.children}   {/* THIS IS USED TO RENDER OUR ALL COMPONENTS TO THE BROWSER'S WINDOW */}
  </UserContext.Provider>;
  
}

export default Context