import React from 'react';
import { Card, CardContent, Typography, Avatar, Button, Box, Container, TextField, Grid, useMediaQuery, useTheme, Divider } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import Navbar from '../../component/Navbar';

const Profile = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <>
      <Navbar />

      <Box
        sx={{
          backgroundColor: 'rgb(229, 236, 243)',
          // minHeight: '100vh',
          padding: 2,
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: 'flex-start',
          gap: 2,
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
            <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
              Pranav Bhingarde
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
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
            padding: 2,
            marginTop: isSmallScreen ? 2 : 0,
            marginLeft:"30px",
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
            <Button variant="contained" color="primary" startIcon={<EditIcon />}>
              Edit
            </Button>
          </Typography>

          <Container >
            <Grid container spacing={2}>
              {[
                { label: 'First Name', type: 'text' },
                { label: 'Last Name', type: 'text' },
                { label: '.', type: 'date' },
                { label: 'Username', type: 'text' },
                { label: 'Email', type: 'email' },
                { label: 'Password', type: 'password' }
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
      <Box sx={{backgroundColor:"rgb(229, 236, 243)",height:"500px"}}>
             

             
          </Box>
    </>
  );
};

export default Profile;
