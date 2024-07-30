import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../../component/Navbar'
import { useNavigate } from 'react-router-dom'

const Registretion = () => {
    let router=useNavigate();
    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log(user)
    };
  return (
   
    <>
    <Navbar/>
    <Box sx={{ height: 'auto', display: 'flex', justifyContent: 'center',
         alignItems: 'center', flexDirection: 'column',
         width:"400px",

         border:"1px solid rgb",
         margin:"auto",
         marginTop:"50px",
         background:"rgb(220, 216, 216)"
         
      
          }}>

            <Typography variant='h5' color={"blue"} sx={{marginTop:"20px"}}>Register</Typography>
         
         <TextField onChange={handleChange}  value={user.email} placeholder='email' name='email'
          sx={{marginBottom:"30px",marginTop:"20px",width:"80%",height:"15px"}} />
         <TextField onChange={handleChange}  value={user.password} placeholder='password' name='password' 
          sx={{marginBottom:"10px",marginTop:"30px",width:"80%",height:"15px"}} />
         <Button variant='contained' onClick={()=>router('/')}
             sx={{marginBottom:"10px",marginTop:"70px",width:"80%",height:"36px"}}
            >Register</Button>
        <Typography sx={{marginBottom:"30px",marginTop:"20px"}} onClick={()=>router('/')}>
            Don't have an acount ? submit
        </Typography>
    </Box>
    </>
  )
}

export default Registretion