import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/assets/fonts/fonts.css";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
