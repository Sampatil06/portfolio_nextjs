import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" href="/">
        Samarth Patil
      </Link>
      <div className="navbar-links">
        <Link href="/#about">About</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#resume">Resume</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
