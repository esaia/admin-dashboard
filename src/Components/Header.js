import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Header = () => {
  return (
    <div className=' w-full  h-[50px] flex-1 flex   border-b-[1px] border-gray-300 '>
      {/* Left */}
      <div className='flex-2 h-full flex justify-start items-center'>
        <div className='flex items-center  border-[1px] border-gray-300 m-5 h-8 '>
          <input
            type='text'
            className='bg-transparent outline-none px-2 '
            placeholder='Search...'
          />
          <SearchIcon className='text-gray-500' />
        </div>
      </div>
      {/* Right */}
      <div className='h-full flex-1  flex justify-end items-center '>
        <div className=' w-[350px] flex justify-between items-center  mr-5 !text-xs text-gray-700'>
          <LanguageIcon className='menu_icons' />
          English
          <DarkModeOutlinedIcon className='menu_icons' />
          <ZoomOutMapOutlinedIcon className='menu_icons' />
          <div className='relative'>
            <NotificationsOutlinedIcon className='menu_icons' />
            <div className=' absolute top-[-2px] right-[1px] w-[15px] h-[15px] rounded-full bg-red-500 flex justify-center items-center text-[11px] text-white'>
              1
            </div>
          </div>
          <div className='relative'>
            <ChatBubbleOutlineOutlinedIcon className='menu_icons' />
            <div className=' absolute top-[-2px] right-[-2px] w-[15px] h-[15px] rounded-full bg-red-500 flex justify-center items-center text-[11px] text-white'>
              3
            </div>
          </div>
          <MenuOutlinedIcon className='menu_icons' />
          <img
            src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            alt='avatar'
            className='w-7 h-7 rounded-full object-cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
