import React, { useState, useEffect } from 'react';
import { MaterialReactTable , useMaterialReactTable } from 'material-react-table';
import axios from 'axios';
import { base_url } from '../../../Global/Baseurl';
import { Box, IconButton , Button, Tooltip} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon, 
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { swal } from '../../../Global/Baseurl';
import { userService } from '../../../apiServices/UserService';
import { smtpService } from '../../../apiServices/SMTP.service';


const SMTPList = () => {
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [data, setData] = useState([]);
  const [rowCount, setRowCount] = useState(0);
  const [isLoading , setLoading] = useState(true)
  const navigate = useNavigate(); 

  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get(`${base_url}/user/get`, {
  //           params: {
  //             page: pagination.pageIndex,
  //             size: pagination.pageSize,
  //           },
  //           headers: {
  //             "content-type": "application/json",
  //             Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),

  //           },
  //         });
  //         const modifiedData = response.data.data.content.map(item => {
  //           Object.keys(item).forEach(key => {
  //             if (item[key] === null) {
  //               item[key] = '-';
  //             }
  //           });
  //           return item;
  //         })
      
  //         setData(modifiedData);
  //         setRowCount(response.data.data.totalElements);
  //         console.log('res ---->' , response);
      
  //         console.log('res ---->' , response);
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     };
    
  //     setLoading(true)
      
  //     fetchData();
      
  //     setLoading(false)

  // }, [pagination.pageIndex, pagination.pageSize,]); 

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/emailConfig/get`, {
        params: {
          page: pagination.pageIndex,
          size: pagination.pageSize,
        },
        headers: {
          "content-type": "application/json",
          Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
        },
      });
      console.log(response)
      const modifiedData = response.data.data.map(item => {
        Object.keys(item).forEach(key => {
          if (item[key] === null) {
            item[key] = '-';
          }
        });
        return item;
      });
      setData(modifiedData);
      setRowCount(response.data.data.totalElements);
      console.log('res ---->', response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [pagination.pageIndex, pagination.pageSize]);
  
  const handleDeleteUser = async (userId) => {
    try {
      await smtpService.delete(userId);
      fetchData(); 
    } catch (error) {
      console.error('Error deleting server:', error);
    }
  };

   const columns = [
    
    {
      accessorKey: 'name',
      header: 'name',
      size: 'auto',
    },
    {
      accessorKey: 'username',
      header: 'username',
      size: 'auto',
    },
    {
      accessorKey: 'smtp_server',
      header: 'smtp_server',
      size: 'auto',
    },
    {
        accessorKey: 'smtp_port',
        header: 'smtp_port',
        size: 'auto',
      },
      {
        accessorKey: 'connection',
        header: 'connection',
        size: 'auto',
      },
      {
        accessorKey: 'debugging',
        header: 'Debugging',
        size: 'auto',
        accessorFn: (row) => row.debugging ? "true" : "false",

      },
     
   
    
  ];
  
  console.log('printed ---->');


  const table = useMaterialReactTable({
    data,
    columns,
    // enableRowPinning: true,
    enableRowSelection: true,
    enableRowActions: true,
    initialState: {
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
        density: 'compact',
        // columnVisibility: { 
        //   password: false ,
        //   id : false,
        // } 
    },
    renderRowActions: ({ row }) => (
      <Box sx={{ display: 'flex', justifyContent : "center" }}>
        <IconButton
        color="secondary" 
        onClick={() =>  navigate("/updatesmtp", { state: { stateData : row.original} }) }>
          <EditIcon />
        </IconButton>
        <IconButton
  color="error"
  onClick={() => {
    swal("Are You Sure", "Do You Want To Delete This Entry ?", "question", "Yes", true, "No")
      .then((isConfirmed) => {
        if (isConfirmed) {
          console.log('print values ---->', row.original.id);
          smtpService.delete(row.original.id)
            .then(() => {
              // If the deletion is successful, fetch the updated list of users
              fetchData();
            })
            .catch((error) => {
              console.error('Error deleting user:', error);
            });
        }
      });
  }}
>
  <DeleteIcon />
</IconButton>

      </Box>
    ),
    paginationDisplayMode: 'pages',
    rowCount : rowCount,
    manualPagination : "true",
    enableStickyHeader: true,
    muiTableContainerProps: { sx: { maxHeight: '65vh' } },
    muiPaginationProps: {
      rowsPerPageOptions: [5, 10, 20,50,100],
      showFirstButton: false,
      showLastButton: false,
      variant: 'outlined',
    },
    muiSkeletonProps: {
      animation: 'wave',
    },
    muiLinearProgressProps: {
      color: 'secondary',
    },
    muiCircularProgressProps: {
      color: 'secondary',
    },
    onPaginationChange: setPagination,
    state :{
      pagination,
      isLoading,
    },
  });


  return  <MaterialReactTable table={table} />;
    
  
}

export default  SMTPList;
