import React from 'react'

function CurrentDay(props) {
    let time = new Date().toTimeString().split(" ")[0];
    
    let dayTime = new Date().getHours()>11?"PM":"AM";
    // console.log("current Day",props)
    const { current, days_res,day } = props || {};
    const{temp,weather = [],humidity,wind_speed} = current || {};
   
  return (
    <div className='flex flex-row mb-5'>
        <div className='flex flex-row mx-8 '>
            <img src ={`https://openweathermap.org/img/wn/${weather[0]?.icon}.png`} alt = "logo"></img>
            <span><p className = 'text-[38px]'>{Math.ceil(Number(temp) - 273.15)}</p></span>
            <span className='text-[20px]'>°C</span>
        </div>
        <div className=' flex flex-row basis-2/3 justify-between'>
            <div className='flex flex-col bg-yellow-400'>
                <span><p className='text-[20px] font-semibold '>Humidity:</p><p className = 'text-[18px]'>{humidity}%</p></span>
                <span><p className='text-[20px] font-semibold '>Wind:</p><p className = 'text-[18px]'>{Math.ceil(wind_speed*3.6)}km/h</p></span>
            </div>
            <div className ='flex flex-col bg-orange-400'>
                <div className='text-[18px] '>{days_res[day]},<span>{time} {dayTime}</span></div>
                <div><p className='text-[18px] '></p><p className = 'text-[18px]'>{current?.weather[0]?.description.toUpperCase()}</p></div>
            </div>
        </div>
    </div>
  )
}

export default CurrentDay