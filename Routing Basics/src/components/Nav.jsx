import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex gap-3 justify-center items-center nav ">
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "Black",
            fontSize: e.isActive ? "20px" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
       className={(e)=>{
        return [
          e.isActive ? 'text-blue-800' : " ",
          e.isActive ? 'font-bold' : "",
          e.isActive ? 'text-xl' : "",
        ].join(" ")
       }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "red" : "Black",
            fontSize: e.isActive ? "20px" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
