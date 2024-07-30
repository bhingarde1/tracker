import React from 'react'
import { Card, CardContent, Typography, Avatar, Button, Box } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material'

const Profile = () => {
  return (
    <div>

<Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          padding: 2,
          borderRadius: 2,
          boxShadow: 3
        }}
      >
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
           
           
            sx={{ width: 100, height: 100, marginRight: 2 }}
          />
          <Box>
            <Typography variant="h4" component="div">
hhhhhh
            </Typography>
            <Typography variant="body1" color="text.secondary">
              kkkkkk
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
             kkkkk
            </Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              sx={{ marginTop: 2 }}
            >
              Edit Profile
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
    </div>
  )
}

export default Profile