
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Box,
  Container,
  TextField,
  Grid,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import Navbar from '../../component/Navbar';
import { NavLink } from 'react-router-dom';

const Profile = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  let [openstate,setOpenstate]=useState(true)

  return (
    <Box sx={{display:"flex",justifyContent:"end" }}>
     <Box sx={{width:openstate ? "85%":"96%"}}>
     <Navbar setOpenstate={setOpenstate}  />

<Box
  sx={{
    backgroundColor: 'rgb(229, 236, 243)',
    padding: 2,
    // minHeight: '100vh',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    gap: 2,
    marginTop:"55px"

  }}
>
  {/* Profile Card */}
  <Card
    sx={{
      maxWidth: 350,
      padding: 2,
      borderRadius: 2,
      boxShadow: 3,
      flex: 1,
      margin: isSmallScreen ? '0 auto' : '0 0 0 30px',
    }}
  >
    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar
        sx={{ width: 100, height: 100, backgroundColor: '#6a7bf6', marginBottom: 2 }}
      />
      <Typography variant="h4" component="div" sx={{ marginBottom: 1 }}>
        Pranav Bhingarde
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 1 }}>
        9112901996
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
        werqlab@123gmail.com
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<EditIcon />}
        sx={{ marginTop: 2 }}
      > 
        Edit Profile
      </Button>
    </CardContent>
  </Card>

  {/* Edit Profile Form */}
  <Box
    sx={{
      flex: 2,
      borderRadius: 2,
      boxShadow: 3,
      backgroundColor: 'white',
      padding: 3,
      marginTop: isSmallScreen ? 2 : 0,
      marginLeft: isSmallScreen ? 0 : '30px',
      width: '100%',
      maxWidth: isSmallScreen ? '100%' : '700px',
    }}
  >
    <Typography
      variant="h4"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
      }}
    >
      Edit Profile
    </Typography>

    <Container>
      <Grid container spacing={2}>
        {[
          { label: 'First Name', type: 'text' },
          { label: 'Last Name', type: 'text' },
          { label: '.', type: 'date' },
          { label: 'Username', type: 'text' },
          { label: 'Email', type: 'email' },
          { label: 'Password', type: 'password' },
        ].map((field, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <TextField
              fullWidth
              label={field.label}
              type={field.type}
              variant="standard"
            />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ marginTop: 3 }}
      >
        Save Changes
      </Button>
    </Container>
  </Box>
</Box>

{/* Additional Content */}
<Box
  sx={{
    backgroundColor: 'rgb(229, 236, 243)',
    padding: 2,
    // marginTop: 2,
  }}
>
  <Container>
    <Card sx={{ marginBottom: 2, padding: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          Add Balance
        </Typography>
        <NavLink to="/balance">
          <Button variant="contained" color="secondary">
            Add Balance
          </Button>
        </NavLink>
      </CardContent>
    </Card>
  </Container>
</Box>
     </Box>
    </Box>
  );
};

export default Profile;


    
    
  
 