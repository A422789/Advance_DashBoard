import React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'; 

const InvoicesBalances = ({ theme }) => {

const rows = [
  { id: 1, ID: '1001', Name: 'John Smith', Email: 'john.smith@example.com', Age: 35, Phone: '(212) 555-0101', Address: '123 Main St', City: 'New York', ZIP_Code: '10001' },
  { id: 2, ID: '1002', Name: 'Emily Johnson', Email: 'emily.j@example.com', Age: 28, Phone: '(213) 555-0102', Address: '456 Oak Ave', City: 'Los Angeles', ZIP_Code: '90001' },
  { id: 3, ID: '1003', Name: 'Michael Williams', Email: 'michael.w@example.com', Age: 42, Phone: '(312) 555-0103', Address: '789 Pine Ln', City: 'Chicago', ZIP_Code: '60601' },
  { id: 4, ID: '1004', Name: 'Jessica Brown', Email: 'jessica.b@example.com', Age: 25, Phone: '(713) 555-0104', Address: '101 Maple Dr', City: 'Houston', ZIP_Code: '77001' },
  { id: 5, ID: '1005', Name: 'David Jones', Email: 'david.jones@example.com', Age: 31, Phone: '(215) 555-0105', Address: '212 Cedar Ct', City: 'Philadelphia', ZIP_Code: '19101' },
  { id: 6, ID: '1006', Name: 'Sarah Garcia', Email: 'sarah.g@example.com', Age: 29, Phone: '(602) 555-0106', Address: '323 Birch Rd', City: 'Phoenix', ZIP_Code: '85001' },
  { id: 7, ID: '1007', Name: 'Daniel Miller', Email: 'daniel.m@example.com', Age: 38, Phone: '(210) 555-0107', Address: '434 Spruce Way', City: 'San Antonio', ZIP_Code: '78201' },
  { id: 8, ID: '1008', Name: 'Laura Davis', Email: 'laura.davis@example.com', Age: 27, Phone: '(619) 555-0108', Address: '545 Willow Blvd', City: 'San Diego', ZIP_Code: '92101' },
  { id: 9, ID: '1009', Name: 'James Rodriguez', Email: 'james.r@example.com', Age: 45, Phone: '(214) 555-0109', Address: '656 Aspen St', City: 'Dallas', ZIP_Code: '75201' },
  { id: 10, ID: '1010', Name: 'Linda Martinez', Email: 'linda.m@example.com', Age: 52, Phone: '(408) 555-0110', Address: '767 Elm Cir', City: 'San Jose', ZIP_Code: '95101' },
  { id: 11, ID: '1011', Name: 'Robert Hernandez', Email: 'robert.h@example.com', Age: 33, Phone: '(512) 555-0111', Address: '878 Oakwood Pl', City: 'Austin', ZIP_Code: '78701' },
  { id: 12, ID: '1012', Name: 'Mary Lopez', Email: 'mary.lopez@example.com', Age: 24, Phone: '(904) 555-0112', Address: '989 Fir Ct', City: 'Jacksonville', ZIP_Code: '32201' },
  { id: 13, ID: '1013', Name: 'William Gonzalez', Email: 'william.g@example.com', Age: 40, Phone: '(415) 555-0113', Address: '111 Redwood Ave', City: 'San Francisco', ZIP_Code: '94101' },
  { id: 14, ID: '1014', Name: 'Patricia Wilson', Email: 'patricia.w@example.com', Age: 36, Phone: '(317) 555-0114', Address: '222 Sycamore Dr', City: 'Indianapolis', ZIP_Code: '46201' },
  { id: 15, ID: '1015', Name: 'Richard Anderson', Email: 'richard.a@example.com', Age: 48, Phone: '(614) 555-0115', Address: '333 Magnolia Ln', City: 'Columbus', ZIP_Code: '43201' },
  { id: 16, ID: '1016', Name: 'Jennifer Thomas', Email: 'jennifer.t@example.com', Age: 29, Phone: '(704) 555-0116', Address: '444 Poplar Rd', City: 'Charlotte', ZIP_Code: '28201' },
  { id: 17, ID: '1017', Name: 'Charles Taylor', Email: 'charles.t@example.com', Age: 55, Phone: '(817) 555-0117', Address: '555 Walnut Way', City: 'Fort Worth', ZIP_Code: '76101' },
  { id: 18, ID: '1018', Name: 'Barbara Moore', Email: 'barbara.m@example.com', Age: 32, Phone: '(313) 555-0118', Address: '666 Chestnut Blvd', City: 'Detroit', ZIP_Code: '48201' },
  { id: 19, ID: '1019', Name: 'Joseph Jackson', Email: 'joseph.j@example.com', Age: 23, Phone: '(915) 555-0119', Address: '777 Hickory St', City: 'El Paso', ZIP_Code: '79901' },
  { id: 20, ID: '1020', Name: 'Susan Martin', Email: 'susan.martin@example.com', Age: 41, Phone: '(901) 555-0120', Address: '888 Sequoia Cir', City: 'Memphis', ZIP_Code: '38101' },
  
];


  const columns = [
    { field: 'ID', headerName: 'ID', flex: 0.5 },
    { field: 'Name', headerName: 'Name', flex: 1 },
    { field: 'Email', headerName: 'Email', flex: 1.5 },
    { field: 'Age', headerName: 'Age', flex: 0.5 },
    { field: 'Phone', headerName: 'Phone', flex: 1 },
    { field: 'Address', headerName: 'Address', flex: 1.5 },
    { field: 'City', headerName: 'City', flex: 1 },
    { field: 'ZIP_Code', headerName: 'ZIP_Code', flex: 0.5 },
  ];

  return (
    <Box sx={{ width: '100vw', height: '90vh' }}>
      
   
      <Box sx={{ margin: { xs: '15% 0 1% 20%', md: '5% 5% 1% 5%' } }}>
        <Typography color={theme.palette.primary.main} sx={{ fontSize: 30 }}>
          INVOICES
        </Typography>
        <Typography>
          List of Invoice Balances
        </Typography>
      </Box>

 
      <Box sx={{
        maxWidth: { xs: '450px', md: '90%' },
        overflowX: 'auto', 
        height: '80%', 
        
        margin: { xs: '0 0 0 15%', md: '0 0 0 7%' },
      }}>
        
        <Box sx={{ minWidth: '900px', height: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            checkboxSelection
            showToolbar
            slots={{
              toolbar: GridToolbar,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default InvoicesBalances;
