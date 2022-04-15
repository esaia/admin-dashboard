import React from "react";

// table imports
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DataTable = () => {
  const rows = [
    {
      id: 1143155,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Razer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <div className='w-full '>
      <div className='m-5 p-2 bg-white drop-shadow-md '>
        <h2 className='text-gray-400 mx-2 my-2'>Latest Transactions</h2>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell className='!font-semibold '>Tracking ID</TableCell>
                <TableCell className='!font-semibold'>Product</TableCell>
                <TableCell className='!font-semibold'>Customer</TableCell>
                <TableCell className='!font-semibold'>Date</TableCell>
                <TableCell className='!font-semibold'>Amount</TableCell>
                <TableCell className='!font-semibold'>Payment Method</TableCell>
                <TableCell className='!font-semibold'>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className='font-normal'>{row.id}</TableCell>
                  <TableCell className='font-normal'>
                    <div className='flex justify-start items-center'>
                      <img
                        src={row.img}
                        alt=''
                        className='w-8 h-8 object-cover rounded-full mr-5'
                      />
                      {row.product}
                    </div>
                  </TableCell>
                  <TableCell className='font-normal'>{row.customer}</TableCell>
                  <TableCell className='font-normal'>{row.date}</TableCell>
                  <TableCell className='font-normal'>{row.amount}</TableCell>
                  <TableCell className='font-normal'>{row.method}</TableCell>
                  <TableCell className='font-normal'>
                    {row.status === "Approved" ? (
                      <h3 className='bg-green-100 text-green-600 text-center rounded-md p-1'>
                        {row.status}
                      </h3>
                    ) : (
                      <h3 className='bg-yellow-100 text-yellow-600 text-center rounded-md p-1'>
                        {row.status}
                      </h3>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default DataTable;
