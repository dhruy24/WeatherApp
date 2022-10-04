import React from "react";

export default function WeatherCard(props) {
  let { day, max, min, days_res,icon } = props;
  return (
    <>
      <h1 className=" text-[22px] font-semibold text-center underline ">
        {days_res[day].substr(0, 3).toUpperCase()}
      </h1>
      <img
        className="h-[50px] w-[50px]"
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="logo"
      ></img>
      <div>
        <span>
          <p className="text-[20px] font-semibold "></p>
          <p className="text-[18px]">{Math.ceil(Number(max) - 273.15)}° </p>
        </span>
        <span>
          <p className="text-[20px] font-semibold "></p>
          <p className="text-[18px]">{Math.ceil(Number(min) - 273.15)}°</p>
        </span>
      </div>
    </>
  );
}
