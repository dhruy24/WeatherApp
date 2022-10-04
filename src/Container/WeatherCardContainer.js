import React from 'react'
import WeatherCard from '../Components/WeatherCard';

export default function WeatherCradContainer(props) {
  let { daily,day,days_res } =  props || {}
  return (
    <>
    {daily?.slice(1,7).map((element) => {
      day++;
       const { temp, humidity,weather } = element || {};
       const { max, min } = temp;
       let {icon} = weather[0] || []
       const props = {
         day,
         max,
         min,
         humidity,
         days_res,
         icon
       };
       return (
         <div className="item">
           <WeatherCard {...props} />
         </div>
       );
     })}
  </>)
}
