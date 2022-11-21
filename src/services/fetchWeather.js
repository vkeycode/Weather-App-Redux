import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// * GET WEATHER DATA
export const fetchWeather = createAsyncThunk(
  "weathers/getWeathers",
  async (info) => {
    // * IF FETCH TYPE SEARCH
    if (info.type === "search") {
      // * GET CURRENT
      const current = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}weather?q=${info.city}&lang=en&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      // * GET NEXT 24 HOURS
      const nextHours = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}forecast?q=${info.city}&lang=en&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      return { current: current.data, nextHours: nextHours.data.list };
    }
    // * IF FETCH TYPE COORDINATE
    else if (info.type === "coordinate") {
      // * GET CURRENT
      const current = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}weather?lat=${info.lat}&lon=${info.lon}&lang=en&appid=${process.env.REACT_APP_API_KEY}&limit=10&units=metric`
      );
      // * GET NEXT 24 HOURS
      const nextHours = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}forecast?lat=${info.lat}&lon=${info.lon}&lang=en&appid=${process.env.REACT_APP_API_KEY}&limit=10&units=metric`
      );
      return { current: current.data, nextHours: nextHours.data.list };
    }
  }
);
