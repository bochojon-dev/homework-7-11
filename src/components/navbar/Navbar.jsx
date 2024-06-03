import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import search from "../../assets/search.svg";
import login from "../../assets/Logout.svg";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/wishlist"}>
              <li>Shop</li>
            </Link>
            <Link to={"/chart"}>
              <li>Chart </li>
            </Link>
            <li>Blogs</li>
          </ul>
          <div className="nav_icons">
            <img src={search} alt="search" />
            <IoCartOutline className="nav_cart" />
            <button>
              <img src={login} alt="login" />
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
