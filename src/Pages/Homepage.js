import React from "react";
import Futured from "../Components/Futured";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Widgets from "../Components/Widgets";
import DataTable from "../Components/DataTable";
const Homepage = () => {
  return (
    <>
      <div>
        <div className='flex'>
          <Sidebar />

          <div className=' w-full'>
            <Header />
            <div className='flex w-full h-[130px] mt-5 px-3 '>
              <Widgets type='user' />
              <Widgets type='order' />
              <Widgets type='earning' />
              <Widgets type='balance' />
            </div>

            <Futured />
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
