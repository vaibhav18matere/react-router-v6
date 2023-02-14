import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  return <h2>The Project name is : {location.state}</h2>;
};

export default Dashboard;
