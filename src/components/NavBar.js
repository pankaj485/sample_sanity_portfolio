import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  const defaultStyles =
    "py-3 px-6 my-3 mr-4 rounded text-red-200 hover:text-green-800";
  return (
    <header className="bg-red-600">
      <div className="container px-40 mx-auto flex justify-between ">
        <nav className="flex items-center">
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
            to="posts"
            className={(link) =>
              defaultStyles + (!link.isActive ? "" : "text-red-100 bg-red-700")
            }
          >
            posts
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
        <div className="inline-flex p-3 my-6">
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff style={{height: 35, width: 35}} "
          />
          <SocialIcon
            url="https://facebook.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff style={{height: 35, width: 35}} "
          />
          <SocialIcon
            url="https://instagram.com"
            className="mr-4"
            target="_blank"
            fgColor="#fff style={{height: 35, width: 35}} "
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
