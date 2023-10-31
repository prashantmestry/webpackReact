import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./App.scss";

const domNode = document.getElementById("app");
const root = ReactDom.createRoot(domNode);
root.render(<App />);
