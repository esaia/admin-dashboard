import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
const UsersTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionButtons = [
    {
      field: "Action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <div className='flex'>
              <Link to='/users/test'>
                <button className='bg-transparent border-[1px] px-2 rounded-md border-blue-400 text-blue-800'>
                  View
                </button>
              </Link>
              <button
                className='bg-transparent border-[1px] px-2 rounded-md border-red-400 text-red-800 ml-3'
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </button>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <div style={{ height: 508, width: "100%" }} className='p-4  '>
        <DataGrid
          rows={data}
          columns={userColumns.concat(actionButtons)}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UsersTable;
