import React from 'react';
import '../styles/current_day.css'

function CurrentDay(props) {
    let time = new Date().toTimeString().split(" ")[0];
    
    let dayTime = new Date().getHours()>11?"PM":"AM";
    const { current, days_res,day } = props || {};
    const{temp,weather = [],humidity,wind_speed} = current || {};
   
  return (
    <div className='flex flex-row mb-5 justify-center'>
        <div className='flex flex-row mr-5 '>
            <img src ={`https://openweathermap.org/img/wn/${weather[0]?.icon}.png`} alt = "logo"></img>
            <div className = "flex items-center"><p className = 'text-[28px] temp-parah' >{Math.ceil(Number(temp) - 273.15)}</p></div>
            <div className = 'text-[15px] flex items-center degree-c'><p>°C</p></div>
        </div>
        <div className=' flex flex-row basis-4/5 justify-between'>
            <div className='flex flex-col border-l-2 border-black p-1'>
                <span><span className='text-[16px] font-semibold header'>Humidity: </span><span className = 'text-[15px] value '>{humidity}%</span></span>
                <span><span className='text-[16px] font-semibold header'>Wind: </span><span className = 'text-[15px] value '>{Math.ceil(wind_speed*3.6)}km/h</span></span>
            </div>
            <div className ='flex flex-col p-1'>
                <div className='text-[16px] header'><p>{days_res[day]},</p><span>{time} {dayTime}</span></div>
                <div><p></p><p className = 'text-[16px] header'>{current?.weather[0]?.description.toUpperCase()}</p></div>
            </div>
        </div>
    </div>
  )
}

export default CurrentDay