import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const one_day_data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      )

      const value = await one_day_data.json();
      const latitude = value.coord.lat
      const longitude = value.coord.lon

      const  inputdata  = await axios.get(
        //`http://api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=e506c8470448cc7fb4797fc25ad65f93`

        `http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
        //api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid=2e03534a2c89f53e2f831fbf51679d65 
      );
      //console.log(data)
      return inputdata;
      
      
      
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.inputdata);
    }
  }
);

//slice

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: builder1 => {
    //pending
    builder1.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    //fulfilled
    builder1.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      // state.weather = action && action.payload for state.weather = action?.payload
      state.weather = action?.payload?.data;
      state.loading = false;
      state.error = undefined;
    });
    //rejected
    builder1.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload?.data;
    });
  },
});

export default weatherSlice.reducer;
