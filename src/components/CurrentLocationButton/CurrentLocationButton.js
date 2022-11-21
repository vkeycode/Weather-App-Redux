import React from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../services/fetchWeather";

// * NAVIGATOR OPTIONS
const options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0,
};

const CurrentLocation = () => {
  const dispatch = useDispatch();
 // * WHEN getCurrentPosition() FUNCTION SUCCEDED RUN succes() FUNCTIONT AND SET COORDINATE
  const success = (pos) => {
    dispatch(
      fetchWeather({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        type: "coordinate",
      })
    );
  };
 // * WHEN getCurrentPosition() FUNCTION FAILED RUN error() AND GIVE A WARNING IN THE CONSOLE
  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <div className="current-location">
      <button onClick={handleLocation}>Get Your Location</button>
    </div>
  );
};

export default CurrentLocation;
