import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import './App.css';
import './styles/daily_data.css'

import DailyDataContainer from "./Container/DailyDataContainer";

function App() {
  return(
    <div className="" >
    <DailyDataContainer/>
    </div>
  )
  // const [city, setCity] = useState("");
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchWeatherAction("delhi"));
  // }, []);

  // //select state from store
  // const state = useSelector(state => state);
  // const { weather, loading, error } = state || {};

  // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
  // var local_date = new Date(weather?.daily[0].dt * 1000).toLocaleTimeString("en-US")
  // var dayNum = new Date( local_date * 1000).getDay();
  // var days_res = [], i = -1, len = 6;
  // while (++i <= len) {
  //   var dayNum = new Date( weather?.daily[i].dt * 1000).getDay();
  // days_res.push(days[dayNum]);
  // }
  // let day = -1;

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(fetchWeatherAction(city))
  // }

  // return (
  //   <>
  //     <section className="">
  //       <form  onSubmit={handleSubmit}   className="container1">
  //         <div className="heading">
  //           <h2>Weather Forecast</h2>
  //         </div>
  //         <div className="inputdiv">
  //           <input
  //             value={city}
  //             onChange={(e) => setCity(e.target.value)}
  //             placeholder="Search City"
  //             className=" inputsearch"
  //             size="30"
  //             width="10px"
  //           ></input>
  //         </div>
  //         <div className="buttondiv">
  //           <button
  //             type="submit"
  //             className=""
  //           >
  //             Search
  //           </button>
  //         </div>
  //       </form>

  //       {/* Loading data from the api */}
  //       {loading ? (
  //         <h1 className="text-gray-400 text-4xl text-center">
  //           Loading please wait...
  //         </h1>
  //       ) : error ? (
  //         <h1 className="text-red-400 text-2xl text-center">
  //           {error?.message}
  //         </h1>
  //       ) : (
  //         //Divs to show the Data
  //         <div className="error">
  //           <div className="city-header">
  //             <h1>Weather For {city}</h1>
  //           </div>
  //           <div className="maincontainer">
  //             {weather?.daily
  //               .map((element) => {
  //                 day++;
  //                 return (
  //                   <>
  //                     <div className="singleday" id="day">
  //                       <div className="weatherdata">
  //                         {/* <h1 className = "day">{ days_res[day] }</h1> */}
  //                         <h1 className="day">
  //                           {day === 0
  //                             ? "Today"
  //                             : day === 1
  //                             ? "Tomorrow"
  //                             : days_res[day]}{" "}
  //                         </h1>
  //                         <img
  //                           src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
  //                           alt="/"
  //                           width="60px"
  //                           height="60px"
  //                         />
  //                         <br></br>
  //                         <span className="tempheading">
  //                           Max Temp:-
  //                           {Math.ceil(Number(element.temp?.max) - 273.15)}{" "}
  //                         </span>
  //                         <br></br>
  //                         <span className="tempheading">
  //                           Min Temp:-{" "}
  //                           {Math.ceil(Number(element.temp?.min) - 273.15)}{" "}
  //                         </span>
  //                         <br></br>
  //                         <span className="text-yellow-500 text-2xl">
  //                           Humidity: {Math.ceil(Number(element.humidity))}{" "}
  //                         </span>
  //                         <br></br>
  //                       </div>
  //                     </div>
  //                   </>
  //                 );
  //               })
  //               .splice(0, 6)}
  //           </div>
  //         </div>
  //       )}
  //     </section>
  //   </>
  // );
}
export default App;