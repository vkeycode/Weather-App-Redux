import React from "react";

const DailyCard = ({ nextHours }) => {
  // GET DAY NAME
  const getDayName = (dateStr, locale) => {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };

  const day = getDayName(nextHours.dt_txt, "en-EN");
  const hour = nextHours.dt_txt.split(" ")[1];

  return (
    <div className="daily-card">
      <p className="day-hour">
        {day}-{hour}
      </p>
      <p className="temp">{Math.ceil(Number(nextHours.main.temp))} C°</p>
      <img
        src={`http://openweathermap.org/img/wn/${nextHours.weather[0].icon}@2x.png`}
        alt={nextHours}
      />
    </div>
  );
};

export default DailyCard;
