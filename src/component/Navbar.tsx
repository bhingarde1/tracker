import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import  { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router-dom';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';

 const Navbar=()=> {
  let bar=useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };
    const DrawerList = (
        <Box sx={{ width: 200}} role="presentation" onClick={toggleDrawer(false)}>
          <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>bar("/")} >
              <ListItemIcon sx={{color:'blue'}}>
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
              <ListItemIcon sx={{color:"blue"}} >
                <PermIdentityIcon sx={{fontSize:"35px"}}/>
              </ListItemIcon >
              <ListItemText   primary="Profile" />
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
      );
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
          <Button sx={{display:"flex" }} color="inherit"><NavLink to="./login"> Login</NavLink></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar