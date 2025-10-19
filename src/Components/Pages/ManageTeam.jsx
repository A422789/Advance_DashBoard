
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import { GridToolbar } from '@mui/x-data-grid'; 
const ManageTeam = ({theme}) => {
const rows = [
  { id: 1, ID: '1001', Name: 'Lama Ahmed', Email: 'lama.ahmed@example.com', Age: 28, Phone: '(123) 456-7890', Access: 'Admin' },
  { id: 2, ID: '1002', Name: 'Karim Naser', Email: 'karim.naser@example.com', Age: 34, Phone: '(234) 567-8901', Access: 'Manager' },
  { id: 3, ID: '1003', Name: 'Sara Ali', Email: 'sara.ali@example.com', Age: 22, Phone: '(345) 678-9012', Access: 'User' },
  { id: 4, ID: '1004', Name: 'Omar Hassan', Email: 'omar.hassan@example.com', Age: 45, Phone: '(456) 789-0123', Access: 'User' },
  { id: 5, ID: '1005', Name: 'Fatima Mahmoud', Email: 'fatima.m@example.com', Age: 31, Phone: '(567) 890-1234', Access: 'Manager' },
  { id: 6, ID: '1006', Name: 'Youssef Ibrahim', Email: 'youssef.i@example.com', Age: 25, Phone: '(678) 901-2345', Access: 'User' },
  { id: 7, ID: '1007', Name: 'Nour Tarek', Email: 'nour.tarek@example.com', Age: 29, Phone: '(789) 012-3456', Access: 'User' },
  { id: 8, ID: '1008', Name: 'Ali Khaled', Email: 'ali.khaled@example.com', Age: 38, Phone: '(890) 123-4567', Access: 'Manager' },
  { id: 9, ID: '1009', Name: 'Huda Adel', Email: 'huda.adel@example.com', Age: 26, Phone: '(901) 234-5678', Access: 'User' },
  { id: 10, ID: '1010', Name: 'Mohamed Said', Email: 'mohamed.said@example.com', Age: 52, Phone: '(012) 345-6789', Access: 'Admin' },
  { id: 11, ID: '1011', Name: 'Jana Amr', Email: 'jana.amr@example.com', Age: 21, Phone: '(112) 233-4455', Access: 'User' },
  { id: 12, ID: '1012', Name: 'Tamer Hosny', Email: 'tamer.hosny@example.com', Age: 41, Phone: '(223) 344-5566', Access: 'User' },
  { id: 13, ID: '1013', Name: 'Rana Gamal', Email: 'rana.gamal@example.com', Age: 33, Phone: '(334) 455-6677', Access: 'Manager' },
  { id: 14, ID: '1014', Name: 'Fares Kamal', Email: 'fares.kamal@example.com', Age: 27, Phone: '(445) 566-7788', Access: 'User' },
  { id: 15, ID: '1015', Name: 'Dina Sherif', Email: 'dina.sherif@example.com', Age: 30, Phone: '(556) 677-8899', Access: 'User' },
  { id: 16, ID: '1016', Name: 'Mazen Rami', Email: 'mazen.rami@example.com', Age: 35, Phone: '(667) 788-9900', Access: 'Manager' },
  { id: 17, ID: '1017', Name: 'Salma Zaki', Email: 'salma.zaki@example.com', Age: 23, Phone: '(778) 899-0011', Access: 'User' },
  { id: 18, ID: '1018', Name: 'Amr Diab', Email: 'amr.diab@example.com', Age: 55, Phone: '(889) 900-1122', Access: 'Admin' },
  { id: 19, ID: '1019', Name: 'Layla Emad', Email: 'layla.emad@example.com', Age: 24, Phone: '(990) 011-2233', Access: 'User' },
  { id: 20, ID: '1020', Name: 'Khaled Anwar', Email: 'khaled.anwar@example.com', Age: 39, Phone: '(101) 122-3344', Access: 'Manager' },
  { id: 21, ID: '1021', Name: 'Aya Mansour', Email: 'aya.mansour@example.com', Age: 29, Phone: '(121) 232-3434', Access: 'User' },
  { id: 22, ID: '1022', Name: 'Bassem Yasser', Email: 'bassem.yasser@example.com', Age: 42, Phone: '(232) 343-4545', Access: 'Manager' },
  { id: 23, ID: '1023', Name: 'Farida Ashraf', Email: 'farida.ashraf@example.com', Age: 20, Phone: '(343) 454-5656', Access: 'User' },
  { id: 24, ID: '1024', Name: 'Ghassan Medhat', Email: 'ghassan.medhat@example.com', Age: 48, Phone: '(454) 565-6767', Access: 'User' },
  { id: 25, ID: '1025', Name: 'Hanan Shawky', Email: 'hanan.shawky@example.com', Age: 36, Phone: '(565) 676-7878', Access: 'Manager' },
  { id: 26, ID: '1026', Name: 'Iyad Nassar', Email: 'iyad.nassar@example.com', Age: 40, Phone: '(676) 787-8989', Access: 'Admin' },
  { id: 27, ID: '1027', Name: 'Joudy Karim', Email: 'joudy.karim@example.com', Age: 22, Phone: '(787) 898-9090', Access: 'User' },
  { id: 28, ID: '1028', Name: 'Kinda Alloush', Email: 'kinda.alloush@example.com', Age: 37, Phone: '(898) 909-0101', Access: 'User' },
  { id: 29, ID: '1029', Name: 'Loai Maher', Email: 'loai.maher@example.com', Age: 31, Phone: '(909) 010-1212', Access: 'Manager' },
  { id: 30, ID: '1030', Name: 'Malak Hisham', Email: 'malak.hisham@example.com', Age: 25, Phone: '(010) 121-2323', Access: 'User' },
  { id: 31, ID: '1031', Name: 'Nabil Adel', Email: 'nabil.adel@example.com', Age: 43, Phone: '(111) 222-3333', Access: 'User' },
  { id: 32, ID: '1032', Name: 'Ola Ghanem', Email: 'ola.ghanem@example.com', Age: 39, Phone: '(222) 333-4444', Access: 'Manager' },
  { id: 33, ID: '1033', Name: 'Peter Samy', Email: 'peter.samy@example.com', Age: 28, Phone: '(333) 444-5555', Access: 'User' },
  { id: 34, ID: '1034', Name: 'Qamar Fares', Email: 'qamar.fares@example.com', Age: 26, Phone: '(444) 555-6666', Access: 'User' },
  { id: 35, ID: '1035', Name: 'Ramy Sabry', Email: 'ramy.sabry@example.com', Age: 44, Phone: '(555) 666-7777', Access: 'Admin' },
  { id: 36, ID: '1036', Name: 'Samira Said', Email: 'samira.said@example.com', Age: 58, Phone: '(666) 777-8888', Access: 'Manager' },
  { id: 37, ID: '1037', Name: 'Talaat Zakaria', Email: 'talaat.z@example.com', Age: 50, Phone: '(777) 888-9999', Access: 'User' },
  { id: 38, ID: '1038', Name: 'Uday Raed', Email: 'uday.raed@example.com', Age: 24, Phone: '(888) 999-0000', Access: 'User' },
  { id: 39, ID: '1039', Name: 'Vicky Kiwan', Email: 'vicky.kiwan@example.com', Age: 32, Phone: '(999) 000-1111', Access: 'Manager' },
  { id: 40, ID: '1040', Name: 'Wael Kfoury', Email: 'wael.kfoury@example.com', Age: 47, Phone: '(000) 111-2222', Access: 'User' },
  { id: 41, ID: '1041', Name: 'Xena Akram', Email: 'xena.akram@example.com', Age: 21, Phone: '(123) 111-2222', Access: 'User' },
  { id: 42, ID: '1042', Name: 'Yara Naeem', Email: 'yara.naeem@example.com', Age: 29, Phone: '(234) 222-3333', Access: 'Manager' },
  { id: 43, ID: '1043', Name: 'Ziad Bourji', Email: 'ziad.bourji@example.com', Age: 40, Phone: '(345) 333-4444', Access: 'User' },
  { id: 44, ID: '1044', Name: 'Amina Khalil', Email: 'amina.khalil@example.com', Age: 33, Phone: '(456) 444-5555', Access: 'User' },
  { id: 45, ID: '1045', Name: 'Bahaa Sultan', Email: 'bahaa.sultan@example.com', Age: 49, Phone: '(567) 555-6666', Access: 'Manager' },
  { id: 46, ID: '1046', Name: 'Carmen Soliman', Email: 'carmen.s@example.com', Age: 27, Phone: '(678) 666-7777', Access: 'User' },
  { id: 47, ID: '1047', Name: 'Donia Samir', Email: 'donia.samir@example.com', Age: 36, Phone: '(789) 777-8888', Access: 'Admin' },
  { id: 48, ID: '1048', Name: 'Ehab Tawfik', Email: 'ehab.tawfik@example.com', Age: 54, Phone: '(890) 888-9999', Access: 'User' },
  { id: 49, ID: '1049', Name: 'Fadel Shaker', Email: 'fadel.shaker@example.com', Age: 51, Phone: '(901) 999-0000', Access: 'Manager' },
  { id: 50, ID: '1050', Name: 'Ghada Adel', Email: 'ghada.adel@example.com', Age: 46, Phone: '(012) 000-1111', Access: 'User' },
];

const columns = [
  { field: 'ID', headerName: 'ID',flex:1},
  { field: 'Name', headerName: 'Name',flex:1 },
   { field: 'Email', headerName: 'Email',flex:1 },
    { field: 'Age', headerName: 'Age', flex:1 },
     { field: 'Phone', headerName: 'Phone', flex:1 },
      { field: 'Access', headerName: 'Access',flex:1 ,renderCell:(e)=>{
        console.log(e.value)
          const accessLevel = e.value;
       if(e.value){
        let icon, text, color;  
         if (accessLevel === 'Admin') {
          icon = <AdminPanelSettingsOutlinedIcon />;
          text = 'Admin';
        
          color = theme.palette.error.main; 
        } else if (accessLevel === 'Manager') {
          icon = <SecurityOutlinedIcon />;
          text = 'Manager';
        
          color = theme.palette.success.main;
        } else { // User
          icon = <LockOpenOutlinedIcon />;
          text = 'User';

          color = theme.palette.primary.main;
        }

        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '5px', 
              p: '5px', 
              borderRadius: '4px',
              width: '100px',
              margin:1,
           
              backgroundColor: theme.palette.mode === 'dark' 
                ? theme.palette.grey[800] 
                : theme.palette.grey[200],
            }}
          >
            {icon}
            <Typography sx={{ color: color, fontWeight: 'bold' }}>
              {text}
            </Typography>
          </Box>
        );
          }
         }
      }
];
return (
 
 <Box sx={{ width: '100vw', height: '80vh', }}>
   <Box sx={{margin:{xs:'0px 0px 0px 18% ',md:'0px 0px 1% 5% '}}}>  
  
    <Typography color={theme.palette.primary.main} sx={{fontSize:30}} >
    Team page 
   </Typography>
   <Typography>
    Managing The Team Members
   </Typography>
     </Box>
      <Box sx={{
    maxWidth: { xs: '400px', md: '90%' }, 
    overflowX: 'auto', 

    height: '90%',
    margin: { xs: '5% 0px 0px 15% ', md: '0px 0px 0px 7%' }, 
}}>
    
    <Box sx={{ minWidth: '600px' }}> 
        <DataGrid 
            rows={rows} 
            columns={columns}
         showToolbar
 slots={{
              toolbar: GridToolbar,
            }}

            autoHeight={false} 
        />
    </Box>
       </Box>
 </Box>
  




  );
}

export default ManageTeam




  
