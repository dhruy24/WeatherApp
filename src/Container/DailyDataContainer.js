import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import { fetchWeatherAction } from "../redux/slices/weatherSlices"

import DailyData from '../Components/DailyData'

export default function DailyDataContainer() {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchWeatherAction("delhi"))
    },[])

    const state = useSelector(state => state);
    console.log("stateeee",state)
    const { weather, loading, error } = state || {};
    const { daily,current } = weather || {};
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    var local_date = new Date(weather?.daily[0].dt * 1000).toLocaleTimeString("en-US")
    var dayNum = new Date( local_date * 1000).getDay();
    var days_res = [], i = -1, len = 7;

    while (++i <= len) {
      var dayNum = new Date( weather?.daily[i].dt * 1000).getDay();
    days_res.push(days[dayNum]);
    }

    let day = -1;

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(fetchWeatherAction(city))
      }

    const props = {
     daily,
     current,
     day,
     handleSubmit,
     setCity,
     city,
     days_res
    }
      
  return (
    <DailyData {...props} />
  )
}
