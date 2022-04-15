import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import UsersTable from "../Components/UsersTable";

const Users = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />

        <div className=' w-full'>
          <Header />
          <div className='flex justify-between items-center mt-3 py-1 px-5'>
            <h1 className='text-gray-500 font-semibold text-xl'>
              add new user
            </h1>
            <Link to='/users/new'>
              <button className='border-[1px] border-blue-500 rounded-md px-2 text-gray-800'>
                new user
              </button>
            </Link>
          </div>
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default Users;
