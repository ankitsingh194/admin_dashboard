import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./table.css"
const Tables = () => {
    
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
        <div className='table'>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell className='tablecells' >Product-images</TableCell>
            <TableCell className='tablecell'  align="right">Tracking-id</TableCell>
            <TableCell className='tablecell' align="right">product</TableCell>
            <TableCell className='tablecell' align="right">customer</TableCell>
            <TableCell className='tablecell' align="right">date</TableCell>
            <TableCell className='tablecell' align="right">amount</TableCell>
            <TableCell className='tablecell' align="right">method</TableCell>
            <TableCell className='tablecell' align="right">status</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              
            >
              
              <TableCell className='tablecell' align="right">
                <div className='cellWrapper'>
                    <img src={row.img} alt='' className='image' />
                    </div> 
                    </TableCell>
              <TableCell className='tablecell' align="right">{row.id}</TableCell>     
              <TableCell className='tablecell' align="right">{row.product}</TableCell>     
              <TableCell className='tablecell' align="right">{row.customer}</TableCell>
              <TableCell className='tablecell' align="right">{row.date}</TableCell>
              <TableCell className='tablecell' align="right">{row.amount}</TableCell>
              <TableCell className='tablecell' align="right">{row.method}</TableCell>
              <TableCell className='tablecell' align="right">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
}

export default Tables;
