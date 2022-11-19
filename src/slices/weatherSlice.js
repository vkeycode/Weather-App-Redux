import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// * GET WEATHER DATA
export const fetchWeather = createAsyncThunk(
  "weathers/getWeathers",
  async (info) => {
    if (info.type === "search") {
      const current = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}weather?q=${info.city}&lang=en&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      const nextHours = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}forecast?q=${info.city}&lang=en&appid=${process.env.REACT_APP_API_KEY}&units=metric`
      );
      return { current: current.data, nextHours: nextHours.data };
    } else if (info.type === "coordinate") {
      const current = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}weather?lat=${info.lat}&lon=${info.lon}&lang=en&appid=${process.env.REACT_APP_API_KEY}&limit=10&units=metric`
      );
      const nextHours = await axios(
        `${process.env.REACT_APP_API_WEATHER_URL}forecast?lat=${info.lat}&lon=${info.lon}&lang=en&appid=${process.env.REACT_APP_API_KEY}&limit=10&units=metric`
      );
      return { current: current.data, nextHours: nextHours.data };
    }
  }
);
// * CREATE SLICE
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    items: [
      {
        nextHours: {
          list: "",
        },
        current: {},
      },
    ],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "failed";
    });
  },
});

export default weatherSlice.reducer;
