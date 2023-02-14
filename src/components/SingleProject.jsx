import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const SingleProject = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <>
      <h3>The Project Name is - {id}</h3>
      <button
        onClick={() => {
          navigate("/dashboard", { state: id });
        }}
      >
        View Project Name in different page - using navigate
      </button>
      <br />
      <br />
      <Link to="/dashboard" state={"EXPRESS JS"}>
        View project in diff page - using Link Tag
      </Link>
    </>
  );
};

export default SingleProject;
