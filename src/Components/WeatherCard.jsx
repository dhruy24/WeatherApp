import React from "react";

export default function WeatherCard(props) {
  let { day, max, min, days_res,icon } = props;
  return (
    <div className="">
      <h1 className=" text-[22px] font-semibold text-center underline ">
        {days_res[day].substr(0, 3).toUpperCase()}
      </h1>
      <div className="flex justify-center">
        <img
          className="h-full w-full text-center"
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          alt="logo"
        ></img>
      </div>
      <div>
        <span>
          <p className="text-[18px] text-center">{Math.ceil(Number(max) - 273.15)}°C </p>
        </span>
        <span>
          <p className="text-[18px] text-center">{Math.ceil(Number(min) - 273.15)}°C</p>
        </span>
      </div>
    </div>
  );
}
