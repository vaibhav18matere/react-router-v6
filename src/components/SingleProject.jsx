import React from "react";
import { useParams } from "react-router-dom";

const SingleProject = () => {
  const { id } = useParams();
  return (
    <>
      <h2>The Project Number is {id}</h2>
    </>
  );
};

export default SingleProject;
