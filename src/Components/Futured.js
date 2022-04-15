import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
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

import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Futured = () => {
  const percentage = 66;
  return (
    <div className='w-full p-5 h-[450px]  flex '>
      {/* left */}
      <div className='w-5/12 bg-white drop-shadow-md flex flex-col p-2 '>
        <div className='flex justify-between '>
          <h2 className='text-md text-gray-600'>Total Revenue</h2>
          <MoreVertOutlinedIcon />
        </div>

        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth='5'
          className='my-5'
        />

        <div className='flex flex-col justify-center items-center'>
          <h3 className='text-gray-600'>Total sales made today</h3>
          <h2 className='text-3xl font-semibold py-3'>$420</h2>
          <p className='text-center text-gray-500 text-sm'>
            Previous transactions processing. Last payments may not be included.
          </p>
          <div className='flex justify-between w-full '>
            <div className='flex flex-col justify-between items-center pt-3'>
              <h4 className='text-sm text-gray-600'>Target</h4>
              <div className='flex text-red-500 text-sm'>
                <ArrowDropDownOutlinedIcon />
                <h5>$12.4K</h5>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center pt-3'>
              <h4 className='text-sm text-gray-600'>Last week</h4>
              <div className='flex text-green-500 text-sm'>
                <ArrowDropUpOutlinedIcon />
                <h5>$32.4K</h5>
              </div>
            </div>
            <div className='flex flex-col justify-center items-center pt-3'>
              <h4 className='text-sm text-gray-600'>Last Month</h4>
              <div className='flex text-green-500 text-sm'>
                <ArrowDropUpOutlinedIcon />
                <h5>$52.4K</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* right */}

      <div className=' w-full  ml-5 drop-shadow-md h-full bg-white'>
        <h2 className='text-md text-gray-600 px-5 py-2 '>
          Last 6 Months (Revenue)
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
    </div>
  );
};

export default Futured;
