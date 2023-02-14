import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Webdev = () => {
  const projectList = [
    "Fun Triangle",
    "Stock Calculator",
    "Palindrome Birthday",
    "Language Translator",
    "Car Store",
    "Quiz",
    "Emoji Interpreter",
  ];

  const randomProjectName =
    projectList[Math.floor(Math.random() * projectList.length)];
  return (
    <>
      <h3>FullStack Projects </h3>
      <div> All the WEBDEV Projects are listed here</div>
      <p>Checking for Navlink</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "blue" : "white",
            color: isActive ? "white" : "black",
          };
        }}
        to={`/projects/webdev/${randomProjectName}`}
      >
        {randomProjectName} |
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "blue" : "white",
            color: isActive ? "white" : "black",
          };
        }}
        to={`/projects/webdev/test-project`}
      >
        {" "}
        Test Project
      </NavLink>
      <Outlet />
    </>
  );
};

export default Webdev;
