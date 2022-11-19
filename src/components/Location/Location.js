import React from "react";
import CurrentLocation from "../CurrentLocation/CurrentLocation";
import Search from "../Search/Search";

const Location = () => {
  return (
    <div className="location">
      <Search></Search>
      <CurrentLocation />
    </div>
  );
};

export default Location;
