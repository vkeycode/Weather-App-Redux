import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const current = useSelector((state) => state.weather.items.current);

  return (
    <div className="current-weather">
      {current && (
        <div>
          <h4>
            {current.name}
            <span>{current.sys.country}</span>
          </h4>
          <p>{Math.ceil(Number(current.main.temp))}</p>
          <p>{current.weather[0].main}</p>
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
