import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Webdev from "./components/Webdev";
import Crypto from "./components/Crypto";
import SingleProject from "./components/SingleProject";
import Dashboard from "./components/Dashboard";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/my-projects"
          element={<Navigate replace to="/projects" />}
        />
        <Route path="projects" element={<Projects />}>
          <Route path="webdev" element={<Webdev />}>
            <Route path=":id" element={<SingleProject />} />
          </Route>
          <Route path="crypto" element={<Crypto />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
