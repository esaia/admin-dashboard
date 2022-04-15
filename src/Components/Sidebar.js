import React from "react";
import { Link } from "react-router-dom";

// Icons import
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className='  flex-2 border-r-[1px] border-gray-300  '>
      <div className='bg-white text-xl w-full h-[50px] flex items-center justify-center  mb-5 font-bold text-pink-900 border-b-[1px] border-gray-300 cursor-pointer '>
        <Link to='/'>
          <span>MY LOGO</span>
        </Link>
      </div>
      <div className=''>
        <h1 className='ml-1 text-[12px] font-semibold text-gray-400 mt-3'>
          MAIN
        </h1>
        <Link to='/'>
          <div className='icondiv'>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </div>
        </Link>
        <h1 className='ml-1 text-[12px] font-semibold text-gray-400 mt-3'>
          LIST
        </h1>
        <Link to='/users'>
          <div className='icondiv'>
            <PeopleAltIcon className='icon' />
            <span>Users</span>
          </div>
        </Link>

        <div className='icondiv'>
          <InventoryIcon className='icon' />
          <span>Products</span>
        </div>
        <div className='icondiv'>
          <CreditCardIcon className='icon' />
          <span>Orders</span>
        </div>
        <div className='icondiv'>
          <LocalShippingIcon className='icon' />
          <span>Delivery</span>
        </div>
        <h1 className='ml-1 text-[12px] font-semibold text-gray-400 mt-3'>
          USEFUL
        </h1>

        <div className='icondiv'>
          <AssessmentIcon className='icon' />
          <span>Status</span>
        </div>
        <div className='icondiv'>
          <NotificationsIcon className='icon' />
          <span>Notifications</span>
        </div>
        <h1 className='ml-1 text-[12px] font-semibold text-gray-400 mt-3'>
          SERVICE
        </h1>

        <div className='icondiv'>
          <LocalHospitalIcon className='icon' />
          <span>System Health</span>
        </div>
        <div className='icondiv'>
          <PsychologyIcon className='icon' />
          <span>Logs</span>
        </div>
        <h1 className='ml-1 text-[12px] font-semibold text-gray-400 mt-3'>
          USER
        </h1>

        <div className='icondiv'>
          <AccountCircleIcon className='icon' />
          <span>Profile</span>
        </div>
        <div className='icondiv'>
          <LogoutIcon className='icon' />
          <span>Logout</span>
        </div>
      </div>

      <div className='flex p-2 '>
        <div className='bg-gray-200 w-5 h-5 rounded-md cursor-pointer mr-3'></div>
        <div className='bg-black w-5 h-5 rounded-md cursor-pointer'></div>
      </div>

      <div className='w-[200px] ' />
    </div>
  );
};

export default Sidebar;
