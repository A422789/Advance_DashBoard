import { Box, Button, colors, Grid, Paper, Stack, Typography, useTheme } from '@mui/material'
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import { Pie, ResponsivePie } from '@nivo/pie'
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from './LineChart';
import PieChart from './PieChart';
import BarChart from './BarChart';
import GeographyChart from './GeographyChart'
const Dashboard = () => {
    const theme=useTheme()

 const data1 = [
  { id: 'completed', value: 86 },
  { id: 'remaining', value: 14 },
];

 const data2 = [
  { id: 'completed', value: 79 },
  { id: 'remaining', value: 21 },
];


 const data3 = [
  { id: 'completed', value: 95 },
  { id: 'remaining', value: 5 },
];


 const data4 = [
  { id: 'completed', value: 57 },
  { id: 'remaining', value: 43 },
];

const nivoTheme = {
    legends: { text: { fill: theme.palette.text.secondary, fontSize: 12 } },
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
      },
    },
  };

 const Transactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    date: "2024-09-01",
    cost: "34.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    date: "2025-04-15",
    cost: "124.20",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2024-11-05",
    cost: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    date: "2025-10-31",
    cost: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2025-07-12",
    cost: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    date: "2024-04-02",
    cost: "43.95",
  },
  {
    txId: "121221sv",
    user: "johndoe",
    date: "2025-08-21",
    cost: "55.25",
  },
  {
    txId: "415a45sb",
    user: "jackdower",
    date: "2025-01-19",
    cost: "28.95",
  },
  {
    txId: "573e45da",
    user: "goodmanave",
    date: "2025-03-14",
    cost: "67.90",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    date: "2024-02-11",
    cost: "13.55",
  },
  {
    txId: "1f2345fb",
    user: "johndoe",
    date: "2025-10-01",
    cost: "99.50",
  },
  {
    txId: "2g3456gc",
    user: "sarahconnor",
    date: "2025-09-25",
    cost: "78.00",
  },
  {
    txId: "3h4567hd",
    user: "mikewilliams",
    date: "2025-08-30",
    cost: "150.75",
  },
  {
    txId: "4i5678ie",
    user: "emilybrown",
    date: "2025-07-22",
    cost: "22.30",
  },
  {
    txId: "5j6789jf",
    user: "chrisgreen",
    date: "2025-06-18",
    cost: "300.00",
  },
  {
    txId: "6k7890kg",
    user: "lisawong",
    date: "2025-05-10",
    cost: "45.60",
  },
  {
    txId: "7l8901lh",
    user: "davidclark",
    date: "2025-04-05",
    cost: "88.10",
  },
  {
    txId: "8m9012mi",
    user: "jessicarod",
    date: "2025-03-20",
    cost: "199.99",
  },
  {
    txId: "9n0123nj",
    user: "kevinbaker",
    date: "2025-02-15",
    cost: "12.00",
  },
  {
    txId: "1o2345ok",
    user: "amandasanchez",
    date: "2025-01-28",
    cost: "550.50",
  },
];

  return (
    
      <Box component="main" sx={{ flexGrow: 1, paddingLeft: 10,display:'flex',flexDirection:'column',width:{xs:'95vw',md:'98vw'},gap:'40px'}}>
         <Box  sx={{height:{xs:'30vh',md:'20vh'},width:'100%',display:'flex' ,justifyContent:{xs:'flex-start',md:'space-between'},alignItems:{md:'flex-end'},flexDirection:{xs:'column' ,md:'row'}}}>
           <Box sx={{ marginTop:10 }}>
        <Typography 
          color={theme.palette.primary.main} 
          variant={"h4"} 
          fontWeight="bold"
        >
         DASHBOARD
        </Typography>
        <Typography variant={ "body1"}>
          Welcome to your Dashboard
        </Typography>
      </Box>
      <Button sx={{marginTop:1, marginBottom:2,height:'6vh',width:{xs:'100%',md:'20%'}}} variant='contained' color='primary'>
        <SystemUpdateAltOutlinedIcon/>
        <span style={{marginLeft:10}}>Download Reports</span>
      </Button>
             
         </Box>

        <Box sx={{ height: { xs: '100vh', md: '20vh' }, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexDirection: { xs: 'column', md: 'row' } ,paddingBottom:'3rem' }}>
  

  <Paper 
    sx={{
      width: { xs: '100%', md: '25%' },
      p: 1.5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Stack>
      <EmailIcon />
      <span>12,361</span>
      <span>Emails Sent</span>
    </Stack>
    <Stack alignItems="center">
      <Box sx={{ height: '100px', width: '100px' }}>
        <ResponsivePie
          data={data1}
          theme={nivoTheme}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          innerRadius={0.6}
          padAngle={0}
          cornerRadius={0}
          activeOuterRadiusOffset={8}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[]}
          
          colors={['#ff9800', '#ffe0b2']}
        />
      </Box>
      <span>+14%</span>
    </Stack>
  </Paper>


  <Paper 
    sx={{
      width: { xs: '100%', md: '25%' },
      p: 1.5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Stack>
      <PointOfSaleIcon />
      <span>431,225</span>
      <span>Sales Obtained</span>
    </Stack>
    <Stack alignItems="center">
      <Box sx={{ height: '100px', width: '100px' }}>
        <ResponsivePie
          data={data2} 
          theme={nivoTheme}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          innerRadius={0.6}
          padAngle={0}
          cornerRadius={0}
          activeOuterRadiusOffset={8}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[]}
         
          colors={['#03a9f4', '#b3e5fc']} 
        />
      </Box>
      <span>+21%</span>
    </Stack>
  </Paper>

 
  <Paper 
    sx={{
      width: { xs: '100%', md: '25%' },
      p: 1.5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Stack>
      <PersonAddIcon />
      <span>32,441</span>
      <span>New Clients</span>
    </Stack>
    <Stack alignItems="center">
      <Box sx={{ height: '100px', width: '100px' }}>
        <ResponsivePie
          data={data3} 
          theme={nivoTheme}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          innerRadius={0.6}
          padAngle={0}
          cornerRadius={0}
          activeOuterRadiusOffset={8}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[]}
     
          colors={['#8bc34a', '#dcedc8']} 
        />
      </Box>
      <span>+5%</span>
    </Stack>
  </Paper>


  <Paper 
    sx={{
      width: { xs: '100%', md: '25%' },
      p: 1.5,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    <Stack>
      <TrafficIcon />
      <span>1,325,134</span>
      <span>Traffic Received</span>
    </Stack>
    <Stack alignItems="center">
      <Box sx={{ height: '100px', width: '100px' }}>
        <ResponsivePie
          data={data4}
          theme={nivoTheme}
          margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
          innerRadius={0.6}
          padAngle={0}
          cornerRadius={0}
          activeOuterRadiusOffset={8}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          legends={[]}
       
          colors={['#009688', '#b2dfdb']} 
        />
      </Box>
      <span>+43%</span>
    </Stack>
  </Paper>

</Box>

         
         
         <Box sx={{height:{xs:'100vh',md:'55vh'},width:'100%',display:'flex',justifyContent:'space-between',gap:2,flexDirection:{xs:'column' ,md:'row'}}}>
          <Paper sx={{width:{xs:'100%',md:'65%'} ,height:{xs:'100%',md:'100%'}}}>

          <LineChart IsDashBoard={true}/>


          </Paper >
           <Box sx={{width:{xs:'100%',md:'35%'} ,height:'100%',overflow:'auto'}}>
            <Paper sx={{padding:2 ,fontSize:28,color:'red',marginBottom:2,position:'sticky',top:'-1px'}} >Recent Transaction</Paper>
             {Transactions.map((item)=>{
              return (<Paper  sx={{padding:2 ,marginBottom:1,display:'flex',justifyContent:'space-between' ,color:theme.palette,fontSize:{xs:12,md:18},alignItems:'center'}} >
              <Box>{item.user} <span style={{fontSize:'12px',color:theme.palette.primary.main,display:'block'}}>ID:{item.txId}</span></Box>
              <Box> {item.date}</Box>
              <Box sx={{padding:'5px 10px',background:'red',borderRadius:4}}>${item.cost}</Box>
             </Paper>)
             })}
           </Box>

         </Box>

         <Box sx={{height:{xs:'120vh',md:'60vh'},width:'100%',display:'flex',gap:1,flexDirection:{xs:'column' ,md:'row'}}}>
          <Paper sx={{width:{xs:'100%',md:'35%'} ,height:'100%',padding:2}}>
          <PieChart IsDashBoard={true}/>
          </Paper>
          <Paper sx={{width:{xs:'100%',md:'35%'} ,height:'100%'}}>
            <BarChart IsDashBoard={true}/>
          </Paper>
          <Paper sx={{width:{xs:'100%',md:'35%'} ,height:'100%'}}>
            <GeographyChart IsDashBoard={true}/>
          </Paper>
         </Box>
      </Box>
    
  )
}

export default Dashboard
