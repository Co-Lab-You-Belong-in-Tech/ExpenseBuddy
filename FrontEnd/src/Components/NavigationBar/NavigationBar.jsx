import React from "react";
import AddIcon from "./AddIcon";
import ReportsIcon from "./ReportsIcon";
import ExpensesIcon from "./ExpensesIcon";
import HomeIcon from "./HomeIcon";
import TripsIcon from "./TripsIcon";

export const NavigationBar = () => {
  return (
    <div className="bottom-nav">
        <HomeIcon />
        <TripsIcon />
        <AddIcon />
        <ReportsIcon />
        <ExpensesIcon />
    </div>
  );
};