import React from "react";
import { useParams } from "react-router-dom";

const SingleProject = () => {
  const { id } = useParams();
  return (
    <>
      <h3>The Project Name is - {id}</h3>
    </>
  );
};

export default SingleProject;
