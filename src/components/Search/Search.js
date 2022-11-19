import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../slices/weatherSlice";

const Search = () => {
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      fetchWeather({
        city: city,
        type: "search",
      })
    );
  };

  // * INITIAL FETCH
  useEffect(() => {
    dispatch(
      fetchWeather({
        city: "New York",
        type: "search",
      })
    );
  }, [dispatch])

  return (
    <form onSubmit={(event) => handleSubmit(event)} className="search-form">
      <input
        placeholder="City Name"
        type="search"
        value={city}
        onChange={(event) => handleChange(event)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
