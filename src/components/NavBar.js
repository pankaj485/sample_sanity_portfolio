import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const defaultStyles =
    "py-3 px-6 my-3 mr-4 rounded text-red-200 hover:text-green-800";
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex items-center mx-14">
          <NavLink
            to="/"
            className={(link) =>
              "py-6 px-3  text-4xl font-bold cursive " +
              defaultStyles +
              (!link.isActive ? "" : "text-white")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={(link) =>
              defaultStyles + (!link.isActive ? "" : "text-red-100 bg-red-700")
            }
          >
            About
          </NavLink>
          <NavLink
            to="post"
            className={(link) =>
              defaultStyles + (!link.isActive ? "" : "text-red-100 bg-red-700")
            }
          >
            post
          </NavLink>
          <NavLink
            to="project"
            className={(link) =>
              defaultStyles + (!link.isActive ? "" : "text-red-100 bg-red-700")
            }
          >
            project
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
