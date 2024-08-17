 
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/User" element={<User />}></Route>
      <Route path="/About" element={<About />}></Route>
    </Routes>
  );
}

export default Routing;
