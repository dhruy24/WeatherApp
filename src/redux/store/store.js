import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../slices/weatherSlices";

const reducer = {
  weatherReducer,
}

const store = configureStore({
  reducer 
});
export default store;
