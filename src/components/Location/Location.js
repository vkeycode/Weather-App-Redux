import React from "react";
import CurrentLocationButton from "../CurrentLocationButton/CurrentLocationButton";
import Search from "../Search/Search";

const Location = () => {
  return (
    <div className="location">
      <Search />
      <CurrentLocationButton />
    </div>
  );
};

export default Location;
