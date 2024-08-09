// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import  { useEffect, useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import LogoutIcon from '@mui/icons-material/Logout';
// // import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink, useNavigate } from 'react-router-dom';
// import PermIdentityIcon from '@mui/icons-material/PermIdentity';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
// import { Avatar, useMediaQuery ,useTheme } from '@mui/material';
// import { deepOrange } from '@mui/material/colors';
// import { Logout } from '@mui/icons-material';
// import Login from '../pages/login/Login';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// import { any } from 'zod';

//  const Navbar=({setOpenstate}:any)=> {
//   const[data,setData]=useState("")
//   const[value,setValue]=useState(false);
//   let bar=useNavigate();
//     const [open, setOpen] = useState<boolean>(true);
//     const toggleDrawer = (newOpen: boolean) => () => {
//       setOpenstate(newOpen)
//         setOpen(newOpen);
//       };
//       const theme = useTheme();
//       const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//              let data1=localStorage.getItem("registrationData")
//           let logindata1= localStorage.getItem("logindata");

            
//              const logo=()=>{
//               if (data1) {
//                let userdata=JSON.parse(data1) 
//                if (typeof userdata == 'object' && userdata !== null) {
//                       setData(userdata.firstName
//                       )
//                     }}}
//               useEffect(()=>{
//                     logo()
//               },[])
//              const logindata= localStorage.getItem("logindata")
//       const Logout=()=>{
//         //  localStorage.removeItem("registrationData")
//          localStorage.removeItem("logindata")
//          bar("/login")
//       }
//     const DrawerList = (
//         <Box role="presentation" onClick={toggleDrawer(!open)}>
          
//           <List>
//           <ListItem disablePadding>
//             <ListItemButton onClick={toggleDrawer(!open)} >
//               <ListItemIcon sx={{color:'#6b7cff'}}>
//                   <ArrowBackIosIcon sx={{position:"fix"}}  />
//               </ListItemIcon>
//               <ListItemText   />
//             </ListItemButton>
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton onClick={()=>logindata ? bar("/"):bar("/login")} >
//               <ListItemIcon sx={{color:'#6b7cff'}}>
//                 <DashboardIcon />
//               </ListItemIcon>
//               <ListItemText  primary="Dashbord" />
//             </ListItemButton>
//           </ListItem>
//           </List>   
//           <Divider />
//           <List >
//           <ListItem disablePadding>
//             <ListItemButton onClick={()=>logindata ? bar("/profile"):bar("/login")}>
//               <ListItemIcon sx={{color:"#6b7cff"}} >
//                 <PermIdentityIcon sx={{fontSize:"35px"}}/>
//               </ListItemIcon >
//               <ListItemText   primary="Profile" />
//             </ListItemButton>
//           </ListItem>
//           </List>
//           <Divider />
//           <List >
//           <ListItem disablePadding>
//             <ListItemButton onClick={()=>logindata ? bar("/balance"):bar("/login")}>
//               <ListItemIcon sx={{color:"#6b7cff"}} >
//                 <AddCircleIcon sx={{fontSize:"35px"}}/>
//               </ListItemIcon >
//               <ListItemText   primary="Add Balance " />
//             </ListItemButton>
//           </ListItem>
//           </List>
//           <Divider/>
//           <List >
//           <ListItem disablePadding>
//             <ListItemButton onClick={()=> logindata ? bar("/History1"):bar("/login")}>
//               <ListItemIcon sx={{color:"#6b7cff"}} >
//                 <CurrencyRupeeIcon sx={{fontSize:"35px"}}/>
//               </ListItemIcon >
//               <ListItemText   primary="Expence" />
//             </ListItemButton>
//           </ListItem>
//           </List>
//     <Divider/>
//     {/* <List >
//           <ListItem disablePadding>
//             <ListItemButton onClick={()=>bar("/history")}>
//               <ListItemIcon sx={{color:"#6b7cff"}} >
//                 <CurrencyRupeeIcon sx={{fontSize:"35px"}}/>
//               </ListItemIcon >
//               <ListItemText   primary="History" />
//             </ListItemButton>
//           </ListItem>
//           </List> */}
//           <Divider/>
//     <List >

//           <ListItem disablePadding>
//             <ListItemButton onClick={()=>logindata ? bar("/"):bar("/login")}>
//               <ListItemIcon sx={{color:"#6b7cff"}} >
//                 <AccountBalanceIcon  sx={{fontSize:"35px"}}/>
//               </ListItemIcon >
//               <ListItemText   primary="Account" />
//             </ListItemButton>
//           </ListItem>
//           </List>

//           <Divider/>
//           <List >
      
//           <ListItem disablePadding>
//             <ListItemButton onClick={Logout}>
//               <ListItemIcon sx={{color:"#6b7cff"}} >
//                 <LogoutIcon sx={{fontSize:"35px"}}/>
//               </ListItemIcon >
//               <ListItemText   primary="Logout" />
//             </ListItemButton>
//           </ListItem>
//           </List>
//         </Box>
//       );
    
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Toolbar sx={{display:"flex",justifyContent:"space-between",bgcolor:"rgb(109, 172, 240);"}}>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
           
//             <Button onClick={toggleDrawer(true)}> </Button>
//       <Drawer variant='persistent' sx={{width:open?"200px":"70px",
//         "& .MuiDrawer-paper":{
//           width:{xs:"50vw",md:open? "200px":"70px"}
//         }
//       }} open={ isMobile?open:true} onClose={toggleDrawer(false)}>
//         {DrawerList}
//         {/* {logindata?DrawerList:null} */}
//       </Drawer>
//           </IconButton>
//           {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography> */}
//           <Box sx={{display:"flex",gap:"10px",}}>
//           {/* <Button sx={{display:"flex", }} color="inherit"><NavLink to="/login">{logindata1?} </NavLink></Button> */}
//           <Button sx={{display:"flex", }} >{logindata1?null:<NavLink  style={{ color: 'white', fontSize: '16px', textDecoration: 'none' }} to={"./login"}>login</NavLink>}</Button>
//           <Avatar sx={{ bgcolor: deepOrange[500] }}>{data[0]}</Avatar>
//                <Box sx={{marginTop:"2px",fontSize:"20px"}}>{data}</Box>
//           </Box>
         
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// export default Navbar


// // // // // ////////////////////chat/////////////////////////////

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { NavLink, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Avatar, useMediaQuery, useTheme } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Navbar = ({ setOpenstate}:any) => {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const toggleDrawer = (newOpen:boolean) => () => {
    setOpenstate(newOpen);
    setOpen(newOpen);
  };

  useEffect(() => {
    const data1 = localStorage.getItem("registrationData");
    if (data1) {
      const userdata = JSON.parse(data1);
      if (userdata && typeof userdata === 'object') {
        setData(userdata.firstName);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("logindata");
    
    navigate("/login");
  };

  const DrawerList = (
    <Box role="presentation" onClick={toggleDrawer(!open)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={toggleDrawer(!open)}>
            <ListItemIcon sx={{ color: '#6b7cff' }}>
             
              {open ?<ArrowBackIosIcon />:<MenuIcon sx={{fontSize:"35px"}}/>}
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")} >
            <ListItemIcon sx={{ color: '#6b7cff' }}>
              <DashboardIcon sx={{fontSize:"35px"}} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/profile")}>
            <ListItemIcon sx={{ color: "#6b7cff" }}>
              <PermIdentityIcon sx={{ fontSize: "35px" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/balance")}>
            <ListItemIcon sx={{ color: "#6b7cff" }}>
              <AddCircleIcon sx={{ fontSize: "35px" }} />
            </ListItemIcon>
            <ListItemText primary="Add Balance" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/history1")}>
            <ListItemIcon sx={{ color: "#6b7cff" }}>
              <CurrencyRupeeIcon sx={{ fontSize: "35px" }} />
            </ListItemIcon>
            <ListItemText primary="Expense" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/account")}>
            <ListItemIcon sx={{ color: "#6b7cff" }}>
              <AccountBalanceIcon sx={{ fontSize: "35px" }} />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon sx={{ color: "#6b7cff" }}>
              <LogoutIcon sx={{ fontSize: "35px" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", bgcolor: "rgb(109, 172, 240)" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant='persistent'
            sx={{
              width: open ? "200px" : "70px",
              "& .MuiDrawer-paper": {
                width: open ? "200px" : "70px",
                transition: theme.transitions.create('width', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.leavingScreen,
                }),
                overflowX: 'hidden',
              },
            }}
            open={isMobile ? open :true}
            onClose={toggleDrawer(false)}
          >
            {DrawerList}
          </Drawer>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button sx={{ color: 'white' }}>
              {!localStorage.getItem("logindata") && <NavLink style={{ color: 'white', fontSize: '16px', textDecoration: 'none' }} to="/login">Login</NavLink>}
            </Button>
            <Avatar sx={{ bgcolor: deepOrange[500], marginLeft: 2 }}>{data[0]}</Avatar>
            <Box sx={{ marginLeft: 2, fontSize: "20px" }}>{data}</Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;












