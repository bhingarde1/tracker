import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const PageNotfound = () => {
     const nav=useNavigate();

  return (
    <Box sx={{display:"flex",justifyContent:"center"}}>
           <Typography variant='h3' sx={{color:"red"}}>PageNotFound</Typography>

           <IconButton
      aria-label="cancel"
    
      sx={{ color: 'red' }} 
    >
      <CloseIcon onClick={()=>nav("/")}/>
    </IconButton>

    </Box>
  )
}

export default PageNotfound