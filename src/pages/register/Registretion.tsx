// // import { Box, Button, TextField, Typography } from '@mui/material'
// // import React, { useState } from 'react'
// // import Navbar from '../../component/Navbar'
// // import { useNavigate } from 'react-router-dom'

// // const Registretion = () => {
// //     let router=useNavigate();
// //     const [user, setUser] = useState({ username: '', email: '', password: '' });
// //     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //         setUser({ ...user, [event.target.name]: event.target.value });
// //         console.log(user)
// //     };
// //   return (
  
// //         <Box sx={{backgroundColor:"rgb(229, 236, 243)",minHeight:"100vh",display: 'flex', justifyContent: 'center',
// //           alignItems: 'center',width:"100vw"}}>
        
// //         <Navbar/>
// //     <Box sx={{  
// //         alignItems: 'center',
// //       display: 'flex', justifyContent: 'center',
// //       flexDirection:"column",
// //          width:"400px",
// //          height:"auto",
// //         //  border:"1px solid black",
// //         borderRadius:"9px",
// //          boxShadow:"revert-layer",
// //          margin:"auto",
// //         //  marginTop:"150px",
// //         backgroundColor:"white",
// //         marginRight:"400px"
         
      
// //           }}>

// //             <Typography variant='h5' color={"blue"} sx={{marginTop:"20px"}}>Register</Typography>
         
// //          <TextField onChange={handleChange}  value={user.email} placeholder='email' name='email'
// //           sx={{marginBottom:"30px",marginTop:"20px",width:"80%",height:"15px"}} />
// //          <TextField onChange={handleChange}  value={user.password} placeholder='password' name='password' 
// //           sx={{marginBottom:"10px",marginTop:"30px",width:"80%",height:"15px"}} />
// //          <Button variant='contained' onClick={()=>router('/')}
// //              sx={{marginBottom:"10px",marginTop:"70px",width:"80%",height:"36px"}}
// //             >Register</Button>
// //         <Typography sx={{marginBottom:"30px",marginTop:"20px"}} onClick={()=>router('/')}>
// //             Don't have an acount ? submit
// //         </Typography>
// //     </Box>
// //     </Box>
// //   )
// // }

// // export default Registretion

// import React from 'react';
// import { Box, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Container } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../component/Navbar';

// // Define Zod schema for validation
// const registrationSchema = z.object({
//   firstName: z.string().min(1, 'First name is required'),
//   lastName: z.string().min(1, 'Last name is required'),
//   email: z.string().email('Invalid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters long'),
//   dateOfBirth: z.string().nonempty('Date of birth is required'),
//   phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits long').max(15, 'Phone number must be at most 15 digits long'),
//   gender: z.string().nonempty('Gender is required'),
// });

// // Define type from schema
// type RegistrationFormValues = z.infer<typeof registrationSchema>;

// const Registration = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormValues>({
//     resolver: zodResolver(registrationSchema),
//   });

//   const onSubmit = (data: RegistrationFormValues) => {
//     console.log('Form Data:', data);
//     navigate('/');
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "rgb(229, 236, 243)",
//         minHeight: "100vh",
//         display: 'flex',
//         flexWrap:"wrap",
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: "100vw",
//       }}
//     >
//       <Navbar />
//       <Container>
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: "column",
//             flexWrap:"wrap",
//             alignItems: 'center',
//             width: "800px",
//             padding: "20px",
//             borderRadius: "9px",
//             boxShadow: 3,
//             backgroundColor: "white",
//             marginLeft:"300px"
//           }}
//         >
//           <Typography variant='h5' color={"blue"} sx={{ marginBottom: "20px" }}>
//             Register
//           </Typography>

//           <form  className='form'  onSubmit={handleSubmit(onSubmit)}>
//             <TextField
//               {...register('firstName')}
//               label="First Name"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: "16px" }}
//               error={!!errors.firstName}
//               helperText={errors.firstName?.message}
//             />
//             <TextField
//               {...register('lastName')}
//               label="Last Name"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: "16px" }}
//               error={!!errors.lastName}
//               helperText={errors.lastName?.message}
//             />
//             <TextField
//               {...register('email')}
//               label="Email"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: "16px" }}
//               error={!!errors.email}
//               helperText={errors.email?.message}
//             />
//             <TextField
//               {...register('password')}
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: "16px" }}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//             />
//             <TextField
//               {...register('dateOfBirth')}
//               label="Date of Birth"
//               type="date"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: "16px" }}
//               InputLabelProps={{ shrink: true }}
//               error={!!errors.dateOfBirth}
//               helperText={errors.dateOfBirth?.message}
//             />
//             <TextField
//               {...register('phoneNumber')}
//               label="Phone Number"
//               variant="outlined"
//               fullWidth
//               sx={{ marginBottom: "16px" }}
//               error={!!errors.phoneNumber}
//               helperText={errors.phoneNumber?.message}
//             />
//             <FormControl fullWidth sx={{ marginBottom: "16px" }}>
//               <InputLabel>Gender</InputLabel>
//               <Select
//                 {...register('gender')}
//                 label="Gender"
//                 defaultValue=""
//                 error={!!errors.gender}
//               >
//                 <MenuItem value="male">Male</MenuItem>
//                 <MenuItem value="female">Female</MenuItem>
//                 <MenuItem value="other">Other</MenuItem>
//               </Select>
//             </FormControl>
//             <Button
//               type="submit"
//               variant='contained'
//               color="primary"
//               fullWidth
//               sx={{ marginTop: "16px" }}
//             >
//               Register
//             </Button>
//           </form>

//           <Typography sx={{ marginTop: "16px" }} onClick={() => navigate('/')}>
//             Already have an account? Login
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Registration;



// import React from 'react';
// import { Box, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Container, Grid } from '@mui/material';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../../component/Navbar';

// // Define Zod schema for validation
// const registrationSchema = z.object({
//   firstName: z.string().min(1, 'First name is required'),
//   lastName: z.string().min(1, 'Last name is required'),
//   email: z.string().email('Invalid email address'),
//   password: z.string().min(6, 'Password must be at least 6 characters long'),
//   confirmPassword: z.string().min(6, 'Confirmation must be at least 6 characters long'),
//   dateOfBirth: z.string().nonempty('Date of birth is required'),
//   phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits long').max(15, 'Phone number must be at most 15 digits long'),
//   gender: z.string().nonempty('Gender is required'),
// }).refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords don't match",
//   path: ['confirmPassword'],
// });

// // Define type from schema
// type RegistrationFormValues = z.infer<typeof registrationSchema>;

// const Registration = () => {
//   const navigate = useNavigate();
//   const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormValues>({
//     resolver: zodResolver(registrationSchema),
//   });

//   const onSubmit = (data: RegistrationFormValues) => {
//     console.log('Form Data:', data);
//     navigate('/');
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "rgb(229, 236, 243)",
//         minHeight: "100vh",
//         display: 'flex',
//         flexWrap: "wrap",
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: "100vw",
//       }}
//     >
//       <Navbar />
//       <Container>
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: "column",
//             alignItems: 'center',
//             width: "100%",
//             maxWidth: "800px",
//             padding: "20px",
//             borderRadius: "9px",
//             boxShadow: 3,
//             backgroundColor: "white",
//             marginTop: "20px",
//           }}
//         >
//           <Typography variant='h5' color={"blue"} sx={{ marginBottom: "20px" }}>
//             Register
//           </Typography>

//           <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   {...register('firstName')}
//                   label="First Name"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ marginBottom: "16px" }}
//                   error={!!errors.firstName}
//                   helperText={errors.firstName?.message}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   {...register('lastName')}
//                   label="Last Name"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ marginBottom: "16px" }}
//                   error={!!errors.lastName}
//                   helperText={errors.lastName?.message}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   {...register('email')}
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ marginBottom: "16px" }}
//                   error={!!errors.email}
//                   helperText={errors.email?.message}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   {...register('password')}
//                   label="Password"
//                   type="password"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ marginBottom: "16px" }}
//                   error={!!errors.password}
//                   helperText={errors.password?.message}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   {...register('confirmPassword')}
//                   label="Confirm Password"
//                   type="password"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ marginBottom: "16px" }}
//                   error={!!errors.confirmPassword}
//                   helperText={errors.confirmPassword?.message}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   {...register('dateOfBirth')}
//                   label="Date of Birth"
//                   type="date"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ marginBottom: "16px" }}
//                   InputLabelProps={{ shrink: true }}
//                   error={!!errors.dateOfBirth}
//                   helperText={errors.dateOfBirth?.message}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   {...register('phoneNumber')}
//                   label="Phone Number"
//                   variant="outlined"
//                   fullWidth
//                   sx={{ marginBottom: "16px" }}
//                   error={!!errors.phoneNumber}
//                   helperText={errors.phoneNumber?.message}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl fullWidth sx={{ marginBottom: "16px" }}>
//                   <InputLabel>Gender</InputLabel>
//                   <Select
//                     {...register('gender')}
//                     label="Gender"
//                     defaultValue=""
//                     error={!!errors.gender}
//                   >
//                     <MenuItem value="male">Male</MenuItem>
//                     <MenuItem value="female">Female</MenuItem>
//                     <MenuItem value="other">Other</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant='contained'
//                   color="primary"
//                   fullWidth
//                   sx={{ marginTop: "16px" }}
//                 >
//                   Register
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>

//           <Typography sx={{ marginTop: "16px" }} onClick={() => navigate('/')}>
//             Already have an account? Login
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Registration;


/////////////////////////
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, FormControl, InputLabel, Select, MenuItem, Container, Grid, Input, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Define Zod schema for validation
const validateDateOfBirth = (value: string | number | Date) => {
  const date = new Date(value);
  const today = new Date();
  // Ensure the input is a valid date and not a future date
  return !isNaN(date.getTime()) && date < today;
};
const registrationSchema = z.object({
  firstName: z.string().min(1, 'First name is required *').max(30,"fist later must me less than 30 char *")
  .regex(/^[A-Za-z]+$/, 'First name must only contain alphabetic characters $')
  .refine(value => value.trim().length > 0, 'First name cannot be only whitespace *'),
  lastName: z.string().min(1, 'Last name is required *')  .regex(/^[A-Za-z]+$/, 'First name must only contain alphabetic characters *')
  .refine(value => value.trim().length > 0, 'First name cannot be only whitespace *'),
  email: z.string().email('Invalid email address *'),
  password: z.string().min(6, 'Password must be at least 6 characters long *'),
  confirmPassword: z.string().min(6, 'Confirmation must be at least 6 characters long *'),
  dateOfBirth: z.string().nonempty('Date of birth is required *')
  .refine(validateDateOfBirth, 'Date of birth must be a valid date and cannot be in the future *'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits long *').max(15, 'Phone number must be at most 15 digits long *'),
  gender: z.string().nonempty('Gender is required *')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

// Define type from schema
type RegistrationFormValues = z.infer<typeof registrationSchema>;

const Registration = () => {
  const [visible,setvisible]=useState(false)
  const [visible1,setvisible1]=useState(false)

  const text=visible ? "text":"password"
  const text1=visible1?"text":"password"
  let togle1=()=>{
    setvisible(!visible)
  }
  let togle2=()=>{
    setvisible1(!visible1)
  }
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = (data: RegistrationFormValues) => {
    // Save data to localStorage
    localStorage.setItem('registrationData', JSON.stringify(data));
    console.log('Form Data:', data);
    navigate('/login');
  };


  return (
    <Box
      sx={{
        backgroundColor: "rgb(229, 236, 243)",  
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: "100vw",
        padding: "20px",
        marginTop:{md:"0px",xs:"19px"}
      }}
    >
      {/* <Navbar /> */}
      <Container >
        <Box
          sx={{
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
            width: "100%",
            maxWidth: "650px",
            padding: "20px",
            
            borderRadius: "9px",
            boxShadow: 3,
            backgroundColor: "white",
            marginTop: "20px",
            // marginLeft:"250px",
            marginLeft:{md:"250px",xs:"0px"}

          }}
        >
          <Typography variant='h5' color={"blue"} sx={{ marginBottom: "20px" }}>
            Register
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
            <Grid  container spacing={2}>
              {/* First Name */}
              <Grid item xs={12} sm={6} >
                <Typography sx={{fontSize:"15px",padding:"5px"}}>FirstName</Typography>
                <Input
                   className='text'
                  {...register('firstName')}
                  // label="First Name"
                  // variant="outlined"
                  // fullWidth
                  disableUnderline
                  sx={{ height: '38px', width: '100%',padding:'10px', fontSize: { xs: '0.875rem', md: '1rem' },
                   border: '1px solid #E0E0E0', borderRadius: '8px', backgroundColor: '#F5F5F5' }}
                  
                  
                  error={!!errors.firstName}
                  // helperText={errors.firstName?.message}
                />
                <Box sx={{height:"10px",color:"red",fontSize:"12px"}}>
                  {errors.firstName?.message}
                </Box>
              </Grid>
              {/* Last Name */}
              <Grid item xs={12} sm={6}>
              <Typography sx={{fontSize:"15px",padding:"5px"}}>Last Name</Typography>
                <Input
                
                  {...register('lastName')}
                  //  label="Last Name"
                  //  variant="outlined"
                  // fullWidth
                  disableUnderline
                  sx={{ height: '38px', width: '100%',padding:'10px' ,fontSize: { xs: '0.875rem', md: '1rem' },
                   border: '1px solid #E0E0E0', borderRadius: '8px',backgroundColor: '#F5F5F5' }}
                  
                  error={!!errors.lastName}
                  // helperText={errors.lastName?.message}
                />
                < Box sx={{height:"10px",color:"red",fontSize:"12px"}}>
                {errors.lastName?.message}
                </Box>
              </Grid>
              {/* Email */}
              <Grid item xs={12} sm={6}>
              <Typography sx={{fontSize:"15px",padding:"5px"}}>Email</Typography>
                <Input
                  // label="Email"
                  {...register('email')}
                  // variant="outlined"
                  // fullWidth
                  // sx={{ marginBottom: "16px" }}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' },
                   border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  
                  error={!!errors.email}
                  // helperText={errors.email?.message}
                />
                <Box sx={{height:"10px",marginBottom:"15px",color:"red",fontSize:"12px"}}>
                {errors.email?.message}
                </Box>
              </Grid>
              {/* Password */}
              <Grid item xs={12} sm={6}>
              <Typography sx={{fontSize:"15px",padding:"5px"}}>Password</Typography>
                <Input
                  {...register('password')}
                  // label="Password"
                    type={text1}
                  // variant="outlined"
                  // fullWidth
                  // endAdornment={<InputAdornment position='end'><VisibilityIcon/></InputAdornment>}
                  endAdornment={<InputAdornment position='end'>{visible1?<VisibilityIcon onClick={togle2}/>:<VisibilityOffIcon onClick={togle2}/>}</InputAdornment>}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' },
                   border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  
                  // sx={{ marginBottom: "16px" }}
                  error={!!errors.password}
                  // helperText={errors.password?.message}
                />
                <Box sx={{height:"10px",marginBottom:"15px",color:"red",fontSize:"12px"}}>
                {errors.password?.message}
                </Box>
              </Grid>
              {/* Confirm Password */}
              <Grid item xs={12} sm={6}>
              <Typography sx={{fontSize:"15px",padding:"5px"}}>ConfirmPassword</Typography>
                <Input
                       endAdornment={<InputAdornment position='end'>{visible?<VisibilityIcon onClick={togle1}/>:<VisibilityOffIcon onClick={togle1}/>}</InputAdornment>}
                  {...register('confirmPassword')}

                  type={text}
                  // label="Confirm Password"
                  // variant="outlined"
                  // fullWidth
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' },
                   border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                       
                  // sx={{ marginBottom: "16px" }}
                  error={!!errors.confirmPassword}
                  // helperText={errors.confirmPassword?.message}
                />
                <Box sx={{heigh:"10px",marginBottom:"15px",color:"red",fontSize:"12px"}}>
                {errors.confirmPassword?.message}
                </Box>
              </Grid>
              {/* Date of Birth */} 
              <Grid item xs={12} sm={6}>
              <Typography sx={{fontSize:"15px",padding:"5px"}}>Date Of Birth</Typography>
                <Input
                  {...register('dateOfBirth')}
                  // label="Date of Birth"
                   type="date"
                  // variant="outlined"
                  // fullWidth
                  // sx={{ marginBottom: "16px" }}
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' },
                   border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  
                  // InputLabelProps={{ shrink: true }}
                  error={!!errors.dateOfBirth}
                  // helperText={errors.dateOfBirth?.message}
                />
                <Box sx={{height:"10px",marginBottom:"15px",color:"red",fontSize:"12px"}}>
                {errors.dateOfBirth?.message}
                </Box>
              </Grid>
              {/* Phone Number */}
              <Grid item xs={12} sm={6}>
              <Typography>PhoneNumber</Typography>
                <Input
                  {...register('phoneNumber')}
                  // label="Phone Number"
                  // variant="outlined"
                  // fullWidth
                  disableUnderline
                  sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' },
                   border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  
                  // sx={{ marginBottom: "10px" }}
                  error={!!errors.phoneNumber}
                  // helperText={errors.phoneNumber?.message}
                />
                <Box sx={{height:"10px",marginBottom:"15px",color:"red",fontSize:"12px"}}>
                {errors.phoneNumber?.message}
                </Box>
              </Grid>
              {/* Gender */}
              <Grid item xs={12} md={6} sm={6}>
              <Typography sx={{fontSize:"15px"}}>Gender</Typography>
                <FormControl fullWidth
                
                
                >
                  
                  {/* <InputLabel sx={{paddingBottom:"9px"}}>Gender</InputLabel> */}
                  <Select
                    {...register('gender')}
                    // label="Gender"
                    // defaultValue=""
                   
                   sx={{ height: '38px', width: '100%', fontSize: { xs: '0.875rem', md: '1rem' },
                    border: '1px solid #E0E0E0', borderRadius: '8px', padding: '10px', backgroundColor: '#F5F5F5' }}
                  
                    
                    error={!!errors.gender}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{height:"10px",marginBottom:"15px",color:"red",fontSize:"12px"}}>
                {errors.gender?.message}
                </Box>
              </Grid>
              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant='contained'
                  color="primary"
                  fullWidth
                  sx={{ marginTop: "16px" }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </form>

          <Typography sx={{ marginTop: "16px" }} >
            Already have an account? 
            <Typography component="span" onClick={() => navigate('/login')} sx={{color:'blue',fontSize:"18px"}}>Login</Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Registration;


