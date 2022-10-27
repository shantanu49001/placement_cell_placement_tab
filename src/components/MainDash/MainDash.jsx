import React from "react";
import Cards from "../Cards1/Cards1";
import Table from "../Table1/Table1";
import "./MainDash.css";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1><span>Placement </span><span>Statistics</span></h1>
      <Cards />
      <Table />
    </div>
  );
};

export default MainDash;
