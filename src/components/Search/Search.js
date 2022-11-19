import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../slices/weatherSlice";

const Search = () => {
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleCity = (event) => {
    event.preventDefault();
    dispatch(
      fetchWeather({
        city: city,
        type: "search",
      })
    );
  };

  return (
    <form onSubmit={(event) => handleCity(event)}>
      <input
        type="search"
        value={city}
        onChange={(event) => handleChange(event)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
