import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './database.css'
import { userRows ,userColumns } from '../../datasources';
import { Link } from 'react-router-dom'
import { useState } from 'react';


const Database = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !== id ));
  }

  const actionColumn =[{field:'action', headername: "Action", width: 200, renderCell: (params) => {
    return (
      <div className='cellAction'>
          <Link to="/users/test" style={{textDecoration: "none"}}>
      <div className='viewButton'>View</div>
      </Link>
      <div className='deleteButton' onClick={()=> handleDelete(params.row.id)}>Delete</div>
      </div>
    )
  } }]




  return (
    <div className='database'>
      <div className='datatablTitle'>
        
        Add New User
        <Link to="/users/new" style={{textDecoration:"none"}} className='d-link'>
          Add New
        </Link>

      </div>
      <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
      />
    </div>
      
    </div>
  );
}

export default Database;

