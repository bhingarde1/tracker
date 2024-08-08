
// import { Box, TextField, Typography } from '@mui/material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Button, InputBase } from '@mui/material';
// import Navbar from '../../component/Navbar';

 
// const Login = () => {

//     const router = useNavigate()
//     const [user, setUser] = useState({ username: '', email: '', password: '' });
//     const [allUsers, setAllUsers] = useState<any[]>([]);
 
//     // Handle input change
//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setUser({ ...user, [event.target.name]: event.target.value });
//         console.log(user)
//     };
 
//     // Handle form submission
//     const handleSubmit = () => {
//         setAllUsers(prevUsers => [...prevUsers, user]);
//         console.log(allUsers)
//         setUser({ username: '', email: '', password: '' });
//     };
//   return (
//     <Box  
//     sx={{
//       // backgroundImage:'url(mony.jpg)',
//       // backgroundPosition:'center',
//       // backgroundSize:'ceter',
//       // backgroundRepeat:"no-repeat",
//       //  color:"transparent",
//        height:"100vh",
//        width:"100vw",
//        backgroundColor:"rgb(229, 236, 243)",
//        display:"flex",
//        alignItems:"center",
//        justifyContent:'center'


       
//     }}
//     >
//     <Navbar/>
//     <Box sx={{ height:'auto', display: 'flex', alignItems: 'center',
//          flexDirection: 'column',
//          width:"370px",
        
//          borderRadius:"9px",
//         //  margin:"auto",
//          marginTop:"60px",
//         //  opacity:"40px",
//          backgroundColor:"white",
//          marginRight:"400px"
         
//         }}
         
//          >
//             <Typography variant='h5' sx={{marginBottom:"20px",marginTop:"20px"}} color={"red"}>Login</Typography>
         
//          <TextField onChange={handleChange}  value={user.email} placeholder='email' name='email' sx={{marginBottom:"30px",marginTop:"5px",
//           backgroundColor:"white",
//           borderRadius:"9px",
//           width:"80%"}}  />
//          <TextField onChange={handleChange}  value={user.password} placeholder='password' name='password'
//           sx={{marginBottom:"5px",marginTop:"10px",width:"80%", backgroundColor:"white",
//             borderRadius:"9px",}}  />
//          <Button  sx={{marginBottom:"7px",marginTop:"40px",width:"80%",height:"36px"}} variant='contained' onClick={()=>router('/')}>Submit</Button>
//         <Typography sx={{marginBottom:"10px",color:"black"}} onClick={()=>router('/regi')}>
//             Don't have an acount ? Register
//         </Typography>
//     </Box>
//     </Box>
//   )
// }
 
// export default Login


///////////////////
import { Box, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  let [openstate,setOpenstate]=useState(true)
  // const [login,setLogin]=useState(false)
  // const logindata

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    // Retrieve data from local storage
    const storedData = localStorage.getItem('registrationData');
    const logindata=localStorage.setItem("logindata",JSON.stringify(user))
    // const valuee=localStorage.setItem("Log"true)
    if (storedData) {
      const allUsers = JSON.parse(storedData);

      // Validate login credentials
      const validUser = allUsers.email === user.email && allUsers.password === user.password

      if (validUser) {
        // Successful login
        // setError('');
        navigate('/'); // Redirect to home page
      } else {
        // Invalid credentials
        setError('Invalid email or password');
      }
    } else {
      setError('No users found');
      alert("Register First")
      navigate("/regi")
    }
  };

  return (
    <Box  
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgb(229, 236, 243)",
        display: "flex",
        alignItems: "center",
        justifyContent: 'center'
      }}
    >
      {/* <Navbar setOpenstate={setOpenstate} /> */}
      <Box 
        sx={{ 
          height: 'auto', 
          display: 'flex', 
          alignItems: 'center',
          flexDirection: 'column',
          width: "380px",
          borderRadius: "10px",
          marginTop: "37px",
          backgroundColor: "white",
          // marginRight:"680px"
          marginRight:{md:"39px",xs:"0px"},
        }}
      >
        <Typography 
          variant='h5' 
          sx={{ marginBottom: "20px", marginTop: "20px" }} 
          color={"blue"}
        >
          Login
        </Typography>
        
        <TextField 
          onChange={handleChange}  
          value={user.email} 
          placeholder='Email' 
          name='email' 
          sx={{ marginBottom: "30px", marginTop: "5px", backgroundColor: "white", borderRadius: "9px", width: "80%" }}  
        />
        <TextField 
          onChange={handleChange}  
          value={user.password} 
          placeholder='Password' 
          name='password'
          type="password"
          sx={{ marginBottom: "5px", marginTop: "10px", width: "80%", backgroundColor: "white", borderRadius: "9px" }}  
        />
        {error && (
          <Typography sx={{ color: 'red', marginBottom: "10px" }}>
            {error}
          </Typography>
        )}
        <Button  
          sx={{ marginBottom: "7px", marginTop: "40px", width: "80%", height: "36px" }} 
          variant='contained' 
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Typography 
          sx={{ marginBottom: "10px", color: "black",display:"inline" }} 
          // onClick={() => navigate('/regi')}
        >
          Don't have an account? 
          <Typography component="span"  onClick={() => navigate('/regi')} sx={{color:"blue",cursor:"pointer",fontSize:"17px"}}> Register </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;

 
