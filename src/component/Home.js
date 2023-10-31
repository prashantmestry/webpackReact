import React from "react";
import { Button } from "@mui/material";
import CompanyList from "./Elements/CompanyList";
import Shopping from "./Shopping/Shopping";
import Daff from "./Daaf/Daaf";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <CompanyList />
      <Button variant="outlined">Click</Button>
      <div></div>
      <Shopping />
      <Daff />
    </div>
  );
};

export default Home;
