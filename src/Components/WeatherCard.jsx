import React from 'react'

export default function WeatherCard(props) {
    let { day, max, min, humidity,days_res } = props
console.log(props,"card")
  return (
    <div className='flex flex-col border-2 border-cyan-500/50 rounded-md px-[4%] py-[6%] bg-red-600 '>
        <h1 className=' text-[22px] font-semibold text-center underline '>{days_res[day]}</h1>
        <span><text className='text-[20px] font-semibold '>Max Temp:-</text><text className = 'text-[18px]'>{Math.ceil(Number(max) - 273.15)}°C</text></span>
        <span><text className='text-[20px] font-semibold '>Min Temp:-</text><text className = 'text-[18px]'>{Math.ceil(Number(min) - 273.15)}°C</text></span>
        <span><text className='text-[20px] font-semibold '>Humidity:-</text><text className = 'text-[18px]'>{humidity}%</text></span>
    </div>
  )
}