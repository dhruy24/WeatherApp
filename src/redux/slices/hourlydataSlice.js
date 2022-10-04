//not in use, only to check working of multiple slices

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHourlyAction = createAsyncThunk(
  "hourlyData/fetch",
  async (payload, { rejectWithValue }) => {
    try {
      const hourly_data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      );
      const value = await hourly_data.json();

      console.log("valueeee",value)

      return value;

    } 
    catch (error) {
      if (!error?.response){
        throw error;
      } 
      return rejectWithValue(error?.response?.value);
    }
  }
);

const hourltDataSlice = createSlice({
    name:'hourly',
    initialState:{},
    extraReducers : builder => {
        //pending
        builder.addCase(fetchHourlyAction.pending,(state)=>{
            state.loading = true;
            console.log("on way")
        });
        builder.addCase(fetchHourlyAction.fulfilled,(state,action)=>{
            console.log("yes",action.payload.coord)
            state.hourly = action?.payload?.data;
            state.loading = false;
            state.error =  undefined;
        });
        builder.addCase(fetchHourlyAction.rejected,(state,action)=>{
            console.log("no")
            state.loading = false;
            state.hourly = undefined;
            state.error =  action?.payload?.data;
        })
    }
})

export default hourltDataSlice.reducer;
