import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import SingleUser from "../Components/SingleUser";

const Single = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />

        <div className=' w-full'>
          <Header />
          <SingleUser />
        </div>
      </div>
    </div>
  );
};

export default Single;
