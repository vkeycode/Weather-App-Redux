import React from "react";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import Location from "../Location/Location";
const Header = () => {
  return (
    <div className="header">
      <CurrentWeather />
      <Location />
    </div>
  );
};

export default Header;
