import React from "react";
import AddNewForm from "../Components/AddNewForm";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Addnew = () => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className=' w-full'>
        <Header />
        <div className='p-5 pb-0'>
          <div className='w-full bg-white drop-shadow-md text-xl text-gray-400 p-3  '>
            Add New User
          </div>
        </div>
        <div className='p-5'>
          <AddNewForm />
        </div>
      </div>
    </div>
  );
};

export default Addnew;
