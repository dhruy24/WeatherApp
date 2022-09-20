import React from 'react'

function CurrentDay(props) {
    console.log("current Day",props)
    const { daily = [], current, days_res,day,city } = props || {};
    const{temp,weather = [],humidity,wind_speed} = current || {};
    const {} = temp || {};
   
  return (
    <div className='flex flex-row'>
        <div className='flex '>
            <img src ={`https://openweathermap.org/img/wn/${weather[0]?.icon}.png`}></img>
            <span><text className='text-[20px] font-semibold '></text><text className = 'text-[18px]'>{Math.ceil(Number(temp) - 273.15)}°C</text></span>
        </div>
        <div className='flex flex-column'>
            <span><text className='text-[20px] font-semibold '>Humidity:</text><text className = 'text-[18px]'>{humidity}%</text></span>
            <span><text className='text-[20px] font-semibold '>Wind:</text><text className = 'text-[18px]'>{wind_speed*3.6}km/h</text></span>
        </div>
        <div className='flex flex-column'>
            <span><text className='text-[20px] font-semibold '></text><text className = 'text-[18px]'>{city}</text></span>
            <span>{days_res[day]}</span>
            <span><text className='text-[20px] font-semibold '></text><text className = 'text-[18px]'>{current?.weather[0]?.description}</text></span>
        </div>
    </div>
  )
}

export default CurrentDay