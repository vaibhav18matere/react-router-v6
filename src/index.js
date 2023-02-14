import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Home from "./components/Home";
import Projects from "./components/Projects";
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
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/my-projects"
          element={<Navigate replace to="/projects" />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
