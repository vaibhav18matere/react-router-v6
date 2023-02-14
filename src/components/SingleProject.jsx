import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
        View Project Name in different page
      </button>
    </>
  );
};

export default SingleProject;
