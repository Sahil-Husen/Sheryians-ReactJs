import "./App.css";
import Show from "./components/Show.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav className="bg-zinc-100 h-20 flex justify-center item-center gap-5 " >
        <Link to="/">Home</Link>
        <Link to="/Show">Show</Link>
        <Link to="/Services">Services</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Show" element={<Show/>} ></Route>
        <Route path="/Services" element={<Services/>} ></Route>
      </Routes>
{/* 
      <Show /> */}
    </>
  );
}

export default App;
