import "./App.css";
import Header from "./components/Header/Header";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { isDayLight } from "./slices/weatherSlice";

function App() {
  const current = useSelector((state) => state.weather.items.current);
  const dayLight = useSelector((state) => state.weather.dayLight);
  const dispatch = useDispatch();

  // * SUNSET AND SUNRISE
  useEffect(() => {
    dispatch(isDayLight(current && current.weather[0].icon.slice(2, 3)));
  }, [dispatch, current]);

  // * IF DAY GET DAY BACKGROUND IF NIGHT GET NIGHT BACKGROUND
  return (
    <div className={dayLight === "d" ? "ContainerDay" : "ContainerNight"}>
      <div className="App">
        <Header />
        <DailyForecast />
      </div>
    </div>
  );
}

export default App;
