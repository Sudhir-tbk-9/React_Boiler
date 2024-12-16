import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Button,
  ListItemIcon,
  MenuItem,
  Typography,
  lighten,
} from '@mui/material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'; 
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { schedularGet } from '../../../Redux/ActionCreator';

//nested data is ok, see accessorKeys in ColumnDef below
// 
const Scheduler = () => {
  const data = useSelector((state) => state.schedular);
  // const [Loading , setLoading] = useState(true)
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  
  
  useEffect(() => {
    
    dispatch(schedularGet())
    console.log('schedular ---->' , data);
    
}, []); 


  //should be memoized or stable
  const columns = useMemo(() => [
      {
        accessorKey: 'F91300_PROCNAME', //access nested data with dot notation
        header: 'First Name',
        size: "auto",
      },
      {
        accessorKey: 'F91300_SCHENTIME',
        header: 'Last Name',
        size: "auto",
      },
      {
        accessorKey: 'F91300_SCHJBNM', //normal accessorKey
        header: 'Address',
        size: "auto",
      },
      {
        accessorKey: 'F91300_SCHJBSTAT',
        header: 'City',
        size: "auto",
      },
      {
        accessorKey: 'F91300_SCHJBTYP',
        header: 'State',
        size: "auto",
      },
      {
        accessorKey: 'F91300_SCHRPTNM',
        header: 'States',
        size: "auto",
      },
      {
        accessorKey: 'F91300_SCHSTTIME',
        header: 'Statess',
        size: "auto",
      },
      {
        accessorKey: 'F91300_SCHVER',
        header: 'Statesss',
        size: "auto",
      },
    ] , [])

   
  const table = useMaterialReactTable({
    columns,
    data,
    // enableRowPinning: true,
    enableRowSelection: true,
    enableRowActions: true,
    paginationDisplayMode: 'pages',
    // enableGrouping: true,
    initialState: {
      columnPinning: {
        left: ['mrt-row-expand', 'mrt-row-select'],
        right: ['mrt-row-actions'],
      },
    },
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          closeMenu() }}
        sx={{ m: 0 }} >
        View Profile
      </MenuItem>,
    ],
    
    mrtTheme: (theme) => ({
      // baseBackgroundColor: "rgb(161 244 228)",
      // draggingBorderColor: theme.palette.secondary.main,
    }),
    muiTableCellProps: ({ table, columns }) => ({
      sx: {
        fontSize: table.windowWidth < 600 ? '10px' : '14px',
      },
    }),
    muiTableRowProps: ({ table }) => ({
      sx: {
        '&:hover': {
          backgroundColor: table.windowWidth < 600 ? 'transparent' : 'rgba(0, 0, 0, 0.04)',
        },
      },
    }),
    muiSkeletonProps: {
      animation: 'wave',
    },
    
  });




  // return ""
  return <MaterialReactTable table={table} />
};

export default Scheduler;