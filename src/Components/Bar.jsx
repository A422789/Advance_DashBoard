import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { NavLink } from "react-router-dom";
import { Avatar } from '@mui/material';
import { useLocation } from "react-router-dom";


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function MiniDrawer({ setMode }) {
 
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const theme=useTheme()

const List1= [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
  {
    text: "Contacts Information",
    icon: <ContactsOutlinedIcon />,
    path: "/contacts",
  },
  {
    text: "Invoices Balances",
    icon: <ReceiptOutlinedIcon />,
    path: "/invoices",
  },
];
const List2 = [
  { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
  { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
  {
    text: "FAQ Page",
    icon: <HelpOutlineOutlinedIcon />,
    path: "/faq",
  },
];

const List3 = [
  { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
  { text: "Pie Chart", icon: <PieChartOutlinedIcon />, path: "/pie" },
  { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
  { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];
function NavListItem({ item, open }) {
  const location = useLocation();
  const isActive = location.pathname === item.path;

  return (
    <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
      <NavLink 
        to={item.path}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <ListItemButton
          sx={[
            {
              minHeight: 48,
              px: 2.5,
              backgroundColor: isActive ? 'grey.400' : 'transparent',
              '&:hover': {
                backgroundColor: isActive ? 'grey.300' : 'rgba(0, 0, 0, 0.04)',
              },
            },
            open 
              ? {
                  justifyContent: 'initial',
                }
              : {
                  justifyContent: 'center',
                },
          ]}
        >
          <ListItemIcon
            sx={[
              {
                minWidth: 0,
                justifyContent: 'center',
                color: isActive ? 'primary.dark' : 'inherit',
              },
              open
                ? {
                    mr: 3,
                  }
                : {
                    mr: 'auto',
                  },
            ]}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            sx={[
              open
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                  },
            ]}
          />
        </ListItemButton>
      </NavLink>
    </ListItem>
  );
}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open}>
        <Toolbar>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            </Search>
              <Box flexGrow={1}/>
             <Stack direction={'row'}>
               {theme.palette.mode==="light"?(
                 <IconButton  color='inherit' 
                 onClick={()=>{
                                setMode((prev)=>{
                                  return   prev=='light'?'dark':'light';
                                })
                             }}>
                             <LightModeIcon/>                           
               </IconButton>
               ):(
                     <IconButton  color='inherit' onClick={()=>{
                                  setMode((prev)=>{
                              return prev=='light'?'dark':'light';
                                })
                             }
                              
                             }>
                             <NightsStayIcon />
                            
               </IconButton>
               )}
                
               
                 <IconButton  color='inherit'>
                           
                            <NotificationsNoneIcon/>
               </IconButton>
                 <IconButton  color='inherit'>
                            <SettingsIcon />
               </IconButton>
                      <IconButton color='inherit'>
                             <PersonOutlinedIcon/>
               </IconButton>

             </Stack>
        </Toolbar>
      </AppBar>

       
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
         {open?(
             <div>
                <Avatar  sx={{mx:'auto',height:'100px',width:'100px'}} alt="Remy Sharp" src="data:image/jpeg;base64,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" />
            <Typography align='center' fontSize={'25px'} fontWeight={'700'}>Lama Ahmed</Typography>
            <Typography align='center' color={theme.palette.info.main}>Admin</Typography>
             </div>

         ):(
            <div>
                <ListItemButton sx={{padding:'0'}}>
                   <Avatar sx={{mx:'auto',height:{xs:'40px',md:'50px'},width:{xs:'40px',md:'50px'},margin:'10px 5px',transition:'0.5s'}} alt="Remy Sharp" src="data:image/jpeg;base64,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" />
               </ListItemButton>
            </div>
         )}
        <Divider />
        <List>
          {List1.map((item) => (
          
           <NavListItem key={item.path} item={item} open={open} />
         
           
           
          ))}
        </List>
         <Divider />
        <List>
          {List2.map((item) => (
          <NavListItem key={item.path} item={item} open={open} />
         
          ))}
        </List>
         <Divider />
        <List>
          {List3.map((item) => (
            
           <NavListItem key={item.path} item={item} open={open} />
         
          ))}
        </List>
      
      </Drawer>
    </Box>
  );
}
