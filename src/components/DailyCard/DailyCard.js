import React from "react";

const DailyCard = ({ nextHours }) => {
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${nextHours.weather[0].icon}@2x.png`}
        alt={nextHours}
      ></img>
      <p>{Math.ceil(Number(nextHours.main.temp))}</p>
      <p>{nextHours.dt_txt}</p>
    </div>
  );
};

export default DailyCard;
