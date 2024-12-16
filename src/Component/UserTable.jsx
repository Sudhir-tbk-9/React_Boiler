// import React, { useState, useEffect } from 'react';
// import { MaterialReactTable , useMaterialReactTable } from 'material-react-table';
// import axios from 'axios';
// import { base_url } from '../Global/Baseurl';

// const UserTable = () => {
//   const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
//   const [data, setData] = useState([]);
//   const [rowCount, setRowCount] = useState(0);

//   useEffect(() => {
      
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`${base_url}/vendorUser/get`, {
//             params: {
//               page: pagination.pageIndex,
//               size: pagination.pageSize,
//             },
//             headers: {
//               Authorization: 'Bearer ' + atob(localStorage.getItem('userToken')),
//             },
//           });
//           setData(response.data.data.content);
//           setRowCount(response.data.data.totalElements);
//           console.log('res ---->' , response);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };
    
  
//       fetchData();
    

//   }, [pagination.pageIndex, pagination.pageSize,]); 

  
//   const columns = [
//     {
//       accessorKey: 'first_name',
//       header: 'First name',
//       size: 'auto',
//     },
//     {
//       accessorKey: 'last_name',
//       header: 'Last Name',
//       size: 'auto',
//     },
//     {
//       accessorKey: 'username',
//       header: 'Username',
//       size: 'auto',
//     },
//     {
//       accessorKey: 'vendor_code',
//       header: 'Vendor Code',
//       size: 'auto',
//     },
//   ];
  


//   const table = useMaterialReactTable({
//     data,
//     columns,
//     // enableRowPinning: true,
//     enableRowSelection: true,
//     // enableRowActions: true,
//     paginationDisplayMode: 'pages',
//     rowCount : rowCount,
//     manualPagination : "true",
//     enableStickyHeader: true,
//     muiTableContainerProps: { sx: { maxHeight: '65vh' } },
//     muiPaginationProps: {
//       rowsPerPageOptions: [5, 10, 20,50,100],
//       showFirstButton: false,
//       showLastButton: false,
//       variant: 'outlined',
//     },
//     muiSkeletonProps: {
//       animation: 'pulse',
//     },
//     onPaginationChange: setPagination,
//     state :{
//       pagination
//     },
//     initialState : {
//       density: 'compact'
//     }
//   });


//   return  <MaterialReactTable table={table} />;
    
  
// };

// export default UserTable;
