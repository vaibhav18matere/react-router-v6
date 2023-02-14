import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Webdev from "./components/Webdev";
import Crypto from "./components/Crypto";
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
          <Route path="webdev" element={<Webdev />} />
          <Route path="crypto" element={<Crypto />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
