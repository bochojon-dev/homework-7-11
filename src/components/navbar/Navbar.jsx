import React from "react";
import "../navbar/Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((state) => state.counter);
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <h1>Navbar {count}</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
