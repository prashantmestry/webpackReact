import React, { createContext, useState } from "react";
export const MyThemeContext = createContext();

let darkThemeColor = {
  currentTheme: "dark",
  color: {
    text: "#e1e1e1",
    revertText: "#383838",
    lightText: "#a8a8a8",

    //Background
    plainBg: "#001528",
    bg: "#03214e",
    bg2: "#0a2c60",
    bg3: "#073780",

    //Borders
    bgBorder: "#174387",
    bg2Border: "#204683",

    // Colors
    bgComp: "red",
    green: "#19c991",
    yellow: "#e3de20",
    red: "#ff6353",

    active: "#0a9b39",
  },
};

let lightThemeColor = {
  currentTheme: "light",
  color: {
    text: "#383838",
    revertText: "#e1e1e1",
    plainBg: "#fff",
    bg: "#fdfdfd",
    bgBorder: "#d5d5d5",

    bg2: "#efefef",
    bg3: "#c5c5c5",
    bg2Border: "#d7d7d7",

    bgComp: "green",
    green: "#19c991",
    yellow: "#e3de20",
    red: "#ff6353",

    active: "#585858",
  },
};

const MyThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(darkThemeColor);
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = (which) => {
    if (which === "dark") {
      setTheme(lightThemeColor);
      setCurrentTheme("light");
    } else if (which === "light") {
      setTheme(darkThemeColor);
      setCurrentTheme("dark");
    }
  };

  const navLink = [
    { id: "", title: "Home" },
    { id: "about", title: "About" },
    { id: "contact", title: "Contact" },
    { id: "products", title: "Products" },
  ];

  return (
    <MyThemeContext.Provider
      value={{
        theme,
        currentTheme,
        toggleTheme,
        navLink,
      }}
    >
      {props.children}
    </MyThemeContext.Provider>
  );
};

export default MyThemeContextProvider;
