import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// * GET DATA IN LOCATION
export const fetchWeather = createAsyncThunk(
  "weathers/getWeathers",
  async (info) => {
    const response = await axios(
      `${process.env.REACT_APP_API_BASE_URL}weather?q=${info.city}&lang=${info.lang}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    );
    return response.data;
  }
);
// * CREATE SLICE
export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    items: [],
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
