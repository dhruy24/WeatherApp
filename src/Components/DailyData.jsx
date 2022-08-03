import React from "react";
import WeatherCard from "./WeatherCard";
import PropTypes from "prop-types";
import "../styles/daily_data.css";

function DailyData(props) {
  console.log(props, "dataa");
  let { daily, day, handleSubmit, city, setCity,days_res } = props;

  return (
    <div className="outer-container">
      <form onSubmit={handleSubmit} className="py-[5%] bg-gray-700">
        <div className="heading">
          
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search City"
            className=" inputsearch"
          ></input>

          <button type="submit" classNameName="">
            Search
          </button>
        </div>
      </form>
      {/* <div className='m-auto flex  flex-wrap w-3/5 justify-evenly'> */}
      <div className="container">
        {daily?.map((element) => {
          day++;
          const { temp, humidity } = element || {};
          const { max, min } = temp;
          const props = {
            day,
            max,
            min,
            humidity,
            days_res
          };
          return (
            // <div className='basis-1/4 align-center'>
            <div className="item">
              {/* <WeatherCard {...props} /> */}
              <h1 className=' text-[22px] font-semibold text-center underline '>{days_res[day]}</h1>
              <span><text className='text-[20px] font-semibold '>Max Temp:-</text><text className = 'text-[18px]'>{Math.ceil(Number(max) - 273.15)}°C</text></span>
              <span><text className='text-[20px] font-semibold '>Min Temp:-</text><text className = 'text-[18px]'>{Math.ceil(Number(min) - 273.15)}°C</text></span>
              <span><text className='text-[20px] font-semibold '>Humidity:-</text><text className = 'text-[18px]'>{humidity}%</text></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

WeatherCard.propTypes = {
  daily: PropTypes.array,
  day: PropTypes.string,
  subHeader: PropTypes.string,
  className: PropTypes.string,
};
WeatherCard.defaultProps = {
  daily: [
    {
      temp: {
        max: 30,
        min: 20,
      },
      humidity: 40,
    },
    {
      temp: {
        max: 30,
        min: 20,
      },
      humidity: 40,
    },
    {
      temp: {
        max: 30,
        min: 20,
      },
      humidity: 40,
    },
  ],
};

export default DailyData;
