import { createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "../services/fetchWeather";

// * CREATE SLICE
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    items: [
      {
        current: {},
        nextHours: {
          list: "",
        },
      },
    ],
    status: "idle",
    dayLight: "",
    search: "",
  },
  reducers: {
    isDayLight: (state, action) => {
      state.dayLight = action.payload;
    },
    setCity: (state, action) => {
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
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
export const { isDayLight, setCity } = weatherSlice.actions;
export default weatherSlice.reducer;
