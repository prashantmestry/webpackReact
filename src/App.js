import React from "react";
import Home from "./component/Home";
import MyThemeContextProvider from "./context/MyThemeContext";

const App = () => {
  return (
    <div>
      <MyThemeContextProvider>
        <Home />
      </MyThemeContextProvider>
    </div>
  );
};

export default App;
