import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchWeather } from "./slices/weatherSlice";

function App() {
  const weather = useSelector((state) => state.weather.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const lang = navigator.language || navigator.userLanguage;
    dispatch(fetchWeather({ lang: lang.substr(0, 2), city: "Ankara" }));
  }, [dispatch]);

  console.log(weather);
  return <div className="App"></div>;
}

export default App;
