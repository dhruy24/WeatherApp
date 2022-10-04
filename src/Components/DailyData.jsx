import WeatherCard from "./WeatherCard";
import CurrentDay from "./CurrentDay";
import PropTypes from "prop-types";
import "../styles/daily_data.css";
import GraphContainer from "../Container/GraphContainer";
import WeatherCardContainer from "../Container/WeatherCardContainer";
import Loader from "./Loader";

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
    error,
  } = props;
  day++;
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
          <button type="submit" className="">
            Search
          </button>
        </div>
      </form>
      {loading ? (
        <Loader/>
      ) : error ? (
        <h1 className="text-red-400 text-2xl text-center">{error?.message}</h1>
      ) : (
        <>
          <div>
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
