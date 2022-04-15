import React from "react";
import DataTable from "./DataTable";
import SingleFutured from "./SingleFutured";

const SingleUser = () => {
  return (
    <div>
      <div className='flex w-full p-5'>
        {/* aboutuser */}
        <div className='bg-white drop-shadow-md px-5  relative  '>
          <div className='w-10 text-[11px] text-white text-center cursor-pointer bg-blue-500 absolute right-0'>
            EDIT
          </div>
          <h2 className='text-gray-300 text-xl font-semibold mb-5 pt-1'>
            information
          </h2>
          <div className='flex'>
            <img
              src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt='avatar'
              className='!w-[100px] !h-[100px] rounded-full object-cover'
            />

            <div className='px-4'>
              <h2 className='text-3xl text-gray-600'>Jane Doe</h2>

              <div className='flex mt-3 text-sm'>
                <span className='text-gray-400 font-semibold mr-3'>
                  Email:{" "}
                </span>
                <p>JaneDoe@gmail.com</p>
              </div>
              <div className='flex mt-3 text-sm'>
                <span className='text-gray-400 font-semibold mr-3'>
                  Phone:{" "}
                </span>
                <p>+1 2345 67 89</p>
              </div>
              <div className='flex mt-3 text-sm'>
                <span className='text-gray-400 font-semibold mr-3'>
                  address:
                </span>
                <p>JaneDoe@gmail.com</p>
              </div>
              <div className='flex mt-3 text-sm'>
                <span className='text-gray-400 font-semibold mr-3'>
                  address:
                </span>
                <p>Elton St. 234 Garden Yd. NewYork</p>
              </div>
              <div className='flex mt-3 text-sm'>
                <span className='text-gray-400 font-semibold mr-3'>
                  Country
                </span>
                <p>USA</p>
              </div>
            </div>
          </div>
          <div className='w-[350px]'></div>
        </div>
        {/* Right chart */}
        <div className='w-full h-full '>
          <SingleFutured />
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default SingleUser;
