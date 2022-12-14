import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function Graph(props) {
  const { data } = props || {}
  return (
    <ResponsiveContainer  height={150}>
    <AreaChart
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="temp" stroke="#545287" fill="#8884d8" dot={{ stroke: '#545287', strokeWidth: 2 }} />
    </AreaChart>
    </ResponsiveContainer>
  );
}
