import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <h5>All projects are listed here</h5>
      <Link to="/projects/webdev"> WEB DEV </Link> |
      <Link to="/projects/crypto"> CRYPTO </Link>
      <Outlet />
    </>
  );
};

export default Projects;
