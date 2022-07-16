import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="post">post</Link>
          <Link to="project">project</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
