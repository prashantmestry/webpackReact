import React, { useContext, useEffect } from "react";
//import { Routes, Route, Navigate } from "react-router-dom";
import { MyThemeContext } from "./context/MyThemeContext";
import Home from "../Home";

const Navigation = (props) => {
  const { theme, toggleTheme, navLink } = useContext(MyThemeContext);

  return (
    <div>
      {/* <Routes>
        <Navigate path="/" element={<Home />} />
        <Navigate path="about" element={<Home />} />
        <Navigate path="contact" element={<Home />} />
      </Routes> */}
    </div>
  );
};

export default Navigation;
