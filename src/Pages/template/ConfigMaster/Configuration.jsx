import React, { useState, useEffect , useMemo, Suspense } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, IconButton , Button, Tooltip} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { Configure } from '../../../Redux/ActionCreator';
import { useNavigate } from 'react-router-dom';
import { swal } from '../../../Global/Baseurl';
import { configService } from '../../../apiServices/config.service';




const Configuration = () => {
  const configurationData = useSelector((state) => state.configuration);
  const [Loading , setLoading] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);



  useEffect(() => {
    dispatch(Configure());
  }, [dispatch]);
  
  useEffect(() => {
    setLoading(false);
    setData(configurationData);
  }, [configurationData]);



  const handleDeleteRecord = async (id) => {
    try {
      await configService.deleteService(id);
      // Remove the deleted record from the data source
      setData(prevData => prevData.filter(record => record.id !== id));
    } catch (error) {
      console.error('Error deleting record:', error);
      // Handle error if needed
    }
  };
  
  

useEffect(() => {
  console.log('runnning  ---->' ,);
    setLoading(false)
  
}, [data]); 
  const columns = [
      {
        accessorKey: 'id', //access nested data with dot notation
        header: 'ID',
        size: "auto",
        enableHiding: false,
      },
      {
        accessorKey: 'url', //access nested data with dot notation
        header: 'URL',
        size: "auto",
      },
      {
        accessorKey: 'username',
        header: 'Username',
        size: "auto",
      },
      {
        accessorKey: 'password',
        header: 'Password',
        size: "auto",
        enableHiding: false,
      },
      {
        accessorKey: 'env', //normal accessorKey
        header: 'ENV',
        size: "auto",
      },
      {
        accessorKey: 'type',
        header: 'Type',
        size: "auto",
      },
      {
        accessorKey: 'urlActive',
        header: 'URL Active',
        size: "auto",
        accessorFn: (row) => row.urlActive ? "true" : "false",
      },
    ] 




    const openDeleteConfirmModal = (row) => {
      if (window.confirm('Are you sure you want to delete this user?')) {
        // deleteUser(row.original.id);
        console.log('row ---->' ,row);
      }
    };

  const table = useMaterialReactTable({
    columns,
    data,
    // enableRowPinning: true,
    enableRowSelection: true,
    enableRowActions: true,
    paginationDisplayMode: 'pages',
    // enableEditing: true,
    editDisplayMode: 'modal',
    renderTopToolbarCustomActions: ({ table, values }) => (
      <Tooltip arrow title="Refresh Data">
        <IconButton onClick={() => dispatch(Configure())}>
          <RefreshIcon />
        </IconButton>
      </Tooltip>
    ),
    onEditingRowSave : ({ table, values }) => {
      // Validate data
      // Save data to API
      // values.url_active = values.url_active == "true" ? true : false
      console.log(values);
      console.log(table , "table");
      table.setEditingRow(null); // Exit editing mode
    },
    // getRowId: (row) => row.id,
    // enableGrouping: true,
    initialState: {
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
        density: 'compact',
        columnVisibility: { 
          password: false ,
          id : false,
        } 
    },
    renderRowActions: ({ row }) => (
      <Box sx={{ display: 'flex', justifyContent : "center" }}>
        <IconButton
        color="secondary" 
        onClick={() =>  navigate(`/updateConfiguration`, { state: { stateData : row.original} }) }>
          <EditIcon />
        </IconButton>
        <IconButton
        color="error"
        onClick={() => swal("Are You Sure", "Do You Want To Delete This Entry ?", "question", "Yes", true, "No").then((isConfirmed) => {
          if (isConfirmed) {
            handleDeleteRecord(row.original.id);
          }
        })}>
          <DeleteIcon />
        </IconButton>
      </Box>
    ),
    muiTableHeadProps: {
      sx: {
        '& th': {
          backgroundColor: '#74EDDA', // Set the header background color to blue
          color: 'black', // Ensure text is readable against the blue background
        },
      },
   },
    muiTableCellProps: ({ table, columns }) => ({
      sx: {
        fontSize: table.windowWidth < 600 ? '10px' : '14px',
        
      },
    }),
    muiTableBodyProps: {
      sx: {
        // Stripe the rows, make odd rows a darker color
        '& tr:nth-of-type(odd) > td': {
          backgroundColor: '#f5f5f5',
        },
      },
   },
    muiTableRowProps: ({ table }) => ({
      sx: {
        '&:hover': {
          backgroundColor: table.windowWidth < 600 ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
        },
        
      },
    }),

    state: {
      isLoading: Loading, // Use the loading state variable here
    },
    muiSkeletonProps: {         
      animation: 'wave',
    },
    muiLinearProgressProps: {
      color: 'primary',
    },
    muiCircularProgressProps: {
      color: 'primary',
    },
  });




  return <MaterialReactTable table={table} />
  
};


export default Configuration;