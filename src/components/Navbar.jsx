import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/add" className="navbar-link">Add Record</Link>
        <Link to="/show" className="navbar-link">Show Records</Link>
      </div>
    </nav>
  );
};

export default Navbar;
