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
import  { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Logout } from '@mui/icons-material';
 const Navbar=()=> {
  const[data,setData]=useState("")
  let bar=useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };
             let data1=localStorage.getItem("registrationData")
            
             const logo=()=>{
              if (data1) {
               let userdata=JSON.parse(data1) 
               if (typeof userdata == 'object' && userdata !== null) {
                     setData(userdata.email[0])
               }
              }
              }

              useEffect(()=>{
                    logo()
              },[])
            
             
      const Logout=()=>{
         localStorage.removeItem("registrationData")
         bar("/login")
      }
    const DrawerList = (
        <Box sx={{ width: 200}} role="presentation" onClick={toggleDrawer(false)}>
          <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>bar("/")} >
              <ListItemIcon sx={{color:'#6b7cff'}}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText  primary="Dashbord" />
            </ListItemButton>
          </ListItem>
          
          </List>
          
          <Divider />
          <List >
          <ListItem disablePadding>
            <ListItemButton onClick={()=>bar("/profile")}>
              <ListItemIcon sx={{color:"#6b7cff"}} >
                <PermIdentityIcon sx={{fontSize:"35px"}}/>
              </ListItemIcon >
              <ListItemText   primary="Profile" />
            </ListItemButton>
          </ListItem>
          </List>
          <Divider />
          <List >
          <ListItem disablePadding>
            <ListItemButton onClick={()=>bar("/balance")}>
              <ListItemIcon sx={{color:"#6b7cff"}} >
                <AddCircleIcon sx={{fontSize:"35px"}}/>
              </ListItemIcon >
              <ListItemText   primary="Add Balance & Saving" />
            </ListItemButton>
          </ListItem>
          </List>
          <Divider/>
          <List >
          <ListItem disablePadding>
            <ListItemButton onClick={()=>bar("/history1")}>
              <ListItemIcon sx={{color:"#6b7cff"}} >
                <CurrencyRupeeIcon sx={{fontSize:"35px"}}/>
              </ListItemIcon >
              <ListItemText   primary="Expence" />
            </ListItemButton>
          </ListItem>
          </List>
    <Divider/>
    <List >
          <ListItem disablePadding>
            <ListItemButton onClick={()=>bar("/history")}>
              <ListItemIcon sx={{color:"#6b7cff"}} >
                <CurrencyRupeeIcon sx={{fontSize:"35px"}}/>
              </ListItemIcon >
              <ListItemText   primary="History" />
            </ListItemButton>
          </ListItem>
          </List>
          <Divider/>
    <List >

          <ListItem disablePadding>
            <ListItemButton onClick={()=>bar("/profile")}>
              <ListItemIcon sx={{color:"#6b7cff"}} >
                <AccountBalanceIcon  sx={{fontSize:"35px"}}/>
              </ListItemIcon >
              <ListItemText   primary="Account" />
            </ListItemButton>
          </ListItem>
          </List>

          <Divider/>
          <List >
      
          <ListItem disablePadding>
            <ListItemButton onClick={Logout}>
              <ListItemIcon sx={{color:"#6b7cff"}} >
                <LogoutIcon sx={{fontSize:"35px"}}/>
              </ListItemIcon >
              <ListItemText   primary="Logout" />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
      );
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{display:"flex",justifyContent:"space-between",bgcolor:"rgb(109, 172, 240);"}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
            <Button onClick={toggleDrawer(true)}> <MenuIcon sx={{color:"white"}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
          </IconButton>
          {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography> */}
          <Box sx={{display:"flex",gap:"10px",}}>
          <Button sx={{display:"flex", }} color="inherit"><NavLink to="/login"> Login</NavLink></Button>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{data}</Avatar>
          </Box>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar