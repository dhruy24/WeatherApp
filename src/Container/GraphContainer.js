import React from 'react'
import Graph from '../Components/Graph'

export default function GraphContainer(props) {
    var data = [];
    const { hourly } = props || {};
    hourly?.slice(0,9).map((ele) => {
        const fullTime = new Date(ele.dt*1000).toLocaleTimeString("en-US").split(':')
        const time =  fullTime[0]+" "+fullTime[2].split(' ')[1]
        var dataObj = {
            time:time,
            temp:Math.ceil(Number(ele.temp) - 273.15)
        }
        data.push(dataObj);
        return data;
    })
  return (
    <Graph data={data}/>
  )
}
