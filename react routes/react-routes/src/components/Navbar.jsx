import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 50px",
    backgroundColor: "#31363bf5",
    color: "white",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "25px",
    fontSize: "17px",
    fontWeight: "500",
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ margin: 0 }}>ABES Engineering College</h2>

      <div>
        <Link to="/" style={linkStyle}>
          Home
        </Link>

        <Link to="/about" style={linkStyle}>
          About
        </Link>

        <Link to="/courses" style={linkStyle}>
          Courses
        </Link>

        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;