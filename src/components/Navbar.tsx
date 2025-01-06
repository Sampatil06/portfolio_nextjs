import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Samarth Patil
      </a>
      <div className="navbar-links">
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#resume">Resume</a>
        <a href="/#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
