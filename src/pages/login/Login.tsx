
import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, InputBase } from '@mui/material';
import Navbar from '../../component/Navbar';

 
const Login = () => {
    const router = useNavigate()
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [allUsers, setAllUsers] = useState<any[]>([]);
 
    // Handle input change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user)
    };
 
    // Handle form submission
    const handleSubmit = () => {
        setAllUsers(prevUsers => [...prevUsers, user]);
        console.log(allUsers)
        setUser({ username: '', email: '', password: '' });
    };
  return (
    <>
    <Navbar/>
    <Box sx={{ height: 'auto', display: 'flex', alignItems: 'center',
         flexDirection: 'column',
         width:"400px",

         border:"1px solid rgb",
         margin:"auto",
         marginTop:"50px",
         background:"rgb(220, 216, 216)"
        }}
         
         >
            <Typography variant='h5' sx={{marginBottom:"20px",marginTop:"20px"}} color={"red"}>Login</Typography>
         
         <TextField onChange={handleChange}  value={user.email} placeholder='email' name='email' sx={{marginBottom:"30px",marginTop:"5px",width:"80%",height:"15px"}}  />
         <TextField onChange={handleChange}  value={user.password} placeholder='password' name='password'
          sx={{marginBottom:"10px",marginTop:"30px",width:"80%",height:"15px"}}  />
         <Button  sx={{marginBottom:"7px",marginTop:"60px",width:"80%",height:"36px"}} variant='contained' onClick={()=>router('/')}>Submit</Button>
        <Typography sx={{marginBottom:"20px"}} onClick={()=>router('/regi')}>
            Don't have an acount ? Register
        </Typography>
    </Box>
    </>
  )
}
 
export default Login
 
