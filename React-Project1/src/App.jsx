// import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Details from "./Components/Details.jsx";
import Create from "./Components/Create.jsx";

function App() {
  const { search, pathname } = useLocation();

  return (
    <div className="w-screen h-screen flex ">
      {(pathname != "/" || search.length > 0) && (
        <Link
          className="absolute text-3xl text-blue-950 font-semibold top-[45%] left-[2.5%] border-2 border-cyan-300 mt-2 py-1 px-3 rounded "
          to="/"
        >
          Home
        </Link>
      )}
      

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
