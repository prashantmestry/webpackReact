import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.scss";

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<App />);