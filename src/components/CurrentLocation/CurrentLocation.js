import React from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../slices/weatherSlice";

const options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0,
};

const CurrentLocation = () => {
  const dispatch = useDispatch();

  const success = (pos) => {
    dispatch(
      fetchWeather({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        type: "coordinate",
      })
    );
  };

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
