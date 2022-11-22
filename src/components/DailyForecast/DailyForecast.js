import React from "react";
import { useSelector } from "react-redux";
import DailyCard from "../DailyCard/DailyCard";

const DailyForecast = () => {
  const nextHours = useSelector((state) => state.weather.items.nextHours);
  return (
    <div className="hourly">
      {nextHours &&
        nextHours.slice(0, 8).map((weather, index) => {
          return <DailyCard key={index} nextHours={weather} />;
        })}
    </div>
  );
};

export default DailyForecast;
