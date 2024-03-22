import React from "react";
import ReactDOM from "react-dom/client";
import RoutesApp from "./routes";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
);
