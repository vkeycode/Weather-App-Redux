import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../services/fetchWeather";
import { setCity } from "../../slices/weatherSlice";

const Search = () => {
  const city = useSelector((state) => state.weather.search);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setCity(event.target.value));
  };
  // * SUBMIT FORM FETCH NEW CITY WEATHER INFO AND CLEAR SEARCH INPUT
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      fetchWeather({
        city: city,
        type: "search",
      })
    ).then(dispatch(setCity("")));
  };

  // * INITIAL FETCH
  useEffect(() => {
    dispatch(
      fetchWeather({
        city: "New York",
        type: "search",
      })
    );
  }, [dispatch]);

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
