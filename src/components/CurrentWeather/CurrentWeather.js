import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const current = useSelector((state) => state.weather.items.current);
  const dayLight = useSelector((state) => state.weather.dayLight);
  return (
    <div className="current-weather">
      {current && (
        <div className="content-current-weather">
          <div>
            <h4>
              {current.name}
              <span className="country"> {current.sys.country}</span>
              <span className="day-span">
                {dayLight === "d" ? "Day" : "Night"}
              </span>
            </h4>
            <p className="current-temp">
              {Math.ceil(Number(current.main.temp))} C°
            </p>
            <p className="current-main">{current.weather[0].main}</p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt={current.weather[0].main}
          />
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
