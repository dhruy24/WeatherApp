import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "./redux/slices/weatherSlices";
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeatherAction(""));
  }, []);

  //select state from store
  const state = useSelector(state => state);
  const { weather, loading, error } = state;
//console.log(state);


  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
  var local_date = new Date(weather?.daily[0].dt * 1000).toLocaleTimeString("en-US")
  var dayNum = new Date( local_date * 1000).getDay();
  var days_res = [], i = -1, len = 5;
  while (++i <= len) {
    var dayNum = new Date( weather?.daily[i].dt * 1000).getDay();
  days_res.push(days[dayNum]);
  }
  // console.log(state);
  return (
    <div>
      
      <section class="">
        
        {/* Taking Input From user */}
        <div class="container1">
          <div class="heading"><h2 >
            Weather Forecast
          </h2>
          </div>
          <div class ="inputdiv">
          <input
            value={city}
            onChange={e => setCity(e.target.value)}
            placeholder="Search City"
            class=" inputsearch"
            size="30"
            width="10px"
          ></input>
          </div>
          <div class ="buttondiv">
          <button
            type="button"
            className=""
            onClick={() => dispatch(fetchWeatherAction(city))}
          >
            Search
          </button>
          </div>
        </div>
        

        {/* Loading data from the api */}
        {loading ? (
          <h1 className="text-gray-400 text-4xl text-center">
            Loading please wait...
          </h1>
        ) : error ? (
          <h1 className="text-red-400 text-2xl text-center">
            {error?.message}
          </h1>         
        ) : (
          
          //Divs to show the Data

        <div class="error">

          <div class ="maincontainer">
            
            {/* Day 1 */}
             <div class ="singleday" id ="day1">
                  
                  <div class="weatherdata" >
                      <h1 class = "day"> Today </h1>
                      <img src={`https://openweathermap.org/img/wn/${weather?.daily[0].weather[0].icon}@2x.png`}
                          alt="/" width="60px" height="60px"/><br></br>
                      
                      <span class = "tempheading">Max Temp:-{Math.ceil(Number(weather?.daily[0].temp?.max)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class = "tempheading">Min Temp:- {Math.ceil(Number(weather?.daily[0].temp?.min)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class="text-yellow-500 text-2xl">Humidity: {Math.ceil(Number(weather?.daily[0].humidity))}{" "} </span><br></br>
                      
  
                  </div>
            </div>


            {/* Day 2 */}
            <div class ="singleday" id ="day2">
                  
                  <div class="weatherdata" >
                      <h1 class = "day">{ days_res[1] }</h1>
                      <img src={`https://openweathermap.org/img/wn/${weather?.daily[1].weather[0].icon}@2x.png`}
                          alt="/" width="60px" height="60px"/><br></br>
                      
                      <span class = "tempheading">Max Temp:-{Math.ceil(Number(weather?.daily[1].temp?.max)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class = "tempheading">Min Temp:- {Math.ceil(Number(weather?.daily[1].temp?.min)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class="text-yellow-500 text-2xl">Humidity: {Math.ceil(Number(weather?.daily[1].humidity))}{" "} </span><br></br>
                      
  
                  </div>
            </div>


            {/* Day 3*/}
            <div class ="singleday" id ="day3">
                  
                  <div class="weatherdata" >
                      <h1 class = "day">{ days_res[2] }</h1>
                      <img src={`https://openweathermap.org/img/wn/${weather?.daily[2].weather[0].icon}@2x.png`}
                          alt="/" width="60px" height="60px"/><br></br>
                      
                      <span class = "tempheading">Max Temp:-{Math.ceil(Number(weather?.daily[2].temp?.max)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class = "tempheading">Min Temp:- {Math.ceil(Number(weather?.daily[2].temp?.min)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class="text-yellow-500 text-2xl">Humidity: {Math.ceil(Number(weather?.daily[2].humidity))}{" "} </span><br></br>
                      
  
                  </div>
            </div>


            {/* Day 4 */}
            <div class ="singleday" id ="day4">
                  
                  <div class="weatherdata" >
                      <h1 class = "day">{ days_res[3] }</h1>
                      <img src={`https://openweathermap.org/img/wn/${weather?.daily[3].weather[0].icon}@2x.png`}
                          alt="/" width="60px" height="60px"/><br></br>
                      
                      <span class = "tempheading">Max Temp:-{Math.ceil(Number(weather?.daily[3].temp?.max)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class = "tempheading">Min Temp:- {Math.ceil(Number(weather?.daily[3].temp?.min)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class="text-yellow-500 text-2xl">Humidity: {Math.ceil(Number(weather?.daily[3].humidity))}{" "} </span><br></br>
                      
  
                  </div>
            </div>


            {/* Day 5 */}
            <div class ="singleday" id ="day5">
                  
                  <div class="weatherdata" >
                      <h1 class = "day">{ days_res[4] }</h1>
                      <img src={`https://openweathermap.org/img/wn/${weather?.daily[4].weather[0].icon}@2x.png`}
                          alt="/" width="60px" height="60px"/><br></br>
                      
                      <span class = "tempheading">Max Temp:-{Math.ceil(Number(weather?.daily[4].temp?.max)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class = "tempheading">Min Temp:- {Math.ceil(Number(weather?.daily[4].temp?.min)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class="text-yellow-500 text-2xl">Humidity: {Math.ceil(Number(weather?.daily[4].humidity))}{" "} </span><br></br>
                      
  
                  </div>
            </div>


            {/* Day 6 */}
            <div class ="singleday" id ="day6">
                  
                  <div class="weatherdata" >
                      <h1 class = "day">{ days_res[5] }</h1>
                      <img src={`https://openweathermap.org/img/wn/${weather?.daily[5].weather[0].icon}@2x.png`}
                          alt="/" width="60px" height="60px"/><br></br>
                      
                      <span class = "tempheading">Max Temp:-{Math.ceil(Number(weather?.daily[5].temp?.max)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class = "tempheading">Min Temp:- {Math.ceil(Number(weather?.daily[5].temp?.min)-273.15)}{" "}</span><br></br>
                      
                      
                      <span class="text-yellow-500 text-2xl">Humidity: {Math.ceil(Number(weather?.daily[5].humidity))}{" "} </span><br></br>
                      
  
                  </div>
            </div>

          </div>
        </div>
        )}
      </section>
    </div>
  )
}
export default App;