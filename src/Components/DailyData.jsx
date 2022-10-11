import WeatherCard from "./WeatherCard";
import CurrentDay from "./CurrentDay";
import PropTypes from "prop-types";
import Form from "./Form";
import GraphContainer from "../Container/GraphContainer";
import WeatherCardContainer from "../Container/WeatherCardContainer";
import Loader from "./Loader";

import "../styles/daily_data.css";
import FollowMeHippo from "./FollowMeHippo";

function DailyData(props) {
  let {
    daily,
    current,
    hourly,
    day,
    handleSubmit,
    city,
    setCity,
    days_res,
    location,
    loading,
  } = props;
  day++;
  return (
    <div className="outer-container">
      <div class = 'text-[38px] sm:text-[50px] lg:text-[70px] text-center mb-2 tracking-wide font-bold tracking-wider'><h1>Weather App</h1></div>
      
      <Form handleSubmit={handleSubmit} setCity={setCity} city={city} />
      <FollowMeHippo/>
      {loading ? (
        <Loader/>
      ) : !daily ? (
          <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 mt-10" role="alert">
            <span class="font-medium">Invalid Input Alert! </span> Change the city
          </div>
      ) : (
        <>
          <div class="">
            <CurrentDay
              daily={daily || []}
              current={current}
              day={day}
              days_res={days_res}
              city={city}
              loaction={location}
            />
            <GraphContainer hourly={hourly} />
          </div>
          <div className="container">
            <WeatherCardContainer daily={daily} day={day} days_res={days_res} />
          </div>
        </>
      )}
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
