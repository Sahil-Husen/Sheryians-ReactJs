import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About.jsx";
import Users from "./components/Users.jsx";
import UserDetails from "./components/Userdetails.jsx";

function App() {
  return (
    <div className="bg-red-100 container text-black p-5 m-auto" >
      <nav className="bg-blue-200  h-20 text-black flex justify-center items-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/user">User</Link>
        <Link to="/userDetails">Userdetails</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<Users />}></Route>
        <Route path="/userDetails" element={<UserDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
