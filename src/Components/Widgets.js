import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
const Widgets = ({ type }) => {
  let data;
  const amount = 100;
  switch (type) {
    case "user":
      data = {
        title: "user",
        ismoney: false,
        link: "See all user",
        icon: (
          <PersonOutlineOutlinedIcon className='bg-red-200 text-red-900 rounded-md !text-[30px] p-1 ml-6' />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        ismoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon className='bg-yellow-200 text-yellow-900 rounded-md !text-[30px] p-1 ml-6' />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        ismoney: true,
        link: "View net earning",
        icon: (
          <MonetizationOnOutlinedIcon className='bg-green-200 text-green-900  rounded-md !text-[30px] p-1 ml-6  ' />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        ismoney: true,
        link: "See details",
        icon: (
          <MonetizationOnOutlinedIcon className='bg-pink-200 text-pink-900   rounded-md !text-[30px] p-1 ml-6' />
        ),
      };
      break;
    default:
      break;
  }
  //className='text-white  !text-[20px]
  return (
    <div className='flex w-full h-full justify-between bg-white rounded-md drop-shadow-md mx-2 px-3 py-3'>
      <div className='flex flex-col justify-between '>
        <h2 className='text-gray-400 font-semibold'>{data.title}</h2>
        <div className='flex justify-start items-center gap-2'>
          {data.ismoney && <span className='text-3xl font-light'>$</span>}
          <h2 className='text-3xl font-light'>{amount}</h2>
        </div>
        <p className='underline font-light text-sm'>{data.link}</p>
      </div>
      <div className='flex flex-col justify-between  '>
        <div className='flex text-green-600'>
          <ArrowDropUpOutlinedIcon />
          <h2>20 %</h2>
        </div>

        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
