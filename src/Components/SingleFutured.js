import React from "react";
import "react-circular-progressbar/dist/styles.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SingleFutured = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

  return (
    <div className='h-[350px] ml-5 drop-shadow-md  bg-white'>
      <h2 className='text-gray-300 text-xl font-semibold mb-5 pt-1 pl-3'>
        User Spending ( Last 6 Months)
      </h2>

      <ResponsiveContainer width='100%' height='85%'>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />

          <Area
            type='natural'
            dataKey='Total'
            stackId='1'
            stroke='#6e9ecc'
            fill='#6e9ecc'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SingleFutured;
