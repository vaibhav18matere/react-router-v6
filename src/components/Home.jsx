import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home Component</h1>

      <Link to="/projects">
        <button>Check Project</button>
      </Link>
    </>
  );
};

export default Home;
