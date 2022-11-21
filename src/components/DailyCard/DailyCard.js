import React from "react";

const DailyCard = ({ nextHours }) => {
  // * GET DAY NAME
  const getDayName = (dateStr, locale) => {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };
  // * SET DAY AND HOURS
  const day = getDayName(nextHours.dt_txt, "en-EN");
  const hour = nextHours.dt_txt.split(" ")[1].substring(0, 5);

  return (
    <div className="daily-card">
      <p className="day-name">{day}</p>
      <p className="hour">{hour}</p>
      <div className="temp-content">
        <p className="temp">{Math.ceil(Number(nextHours.main.temp))} C°</p>
        <img
          src={`http://openweathermap.org/img/wn/${nextHours.weather[0].icon}@2x.png`}
          alt={nextHours}
        />
      </div>
    </div>
  );
};

export default DailyCard;
