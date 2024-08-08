import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import data from "../../data/Data.json"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';  
import Addbalance from '../dilogbox/Addbalance'
import Addexpence from '../dilogbox/Addexpence'
import SaveIcon from '@mui/icons-material/Save';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';



const TopCard = () => {
    let curent=data.curentbalance.map((e)=>(e.balance))

    // let [balance,setBalance]=useState()

   

  return (
    <Box>
        <Grid  container  sx={{display:"flex",xs:{flexWrap:"wrap"},
               
            height:{md:"150px",xs:"auto"},alignItems:{md:"center",xs:"center"},
            
            // marginLeft:"59px",
            marginTop:"65px",
            // marginBottom:"14px",
            
            // marginLeft:"64px",
            marginLeft:{md:"95px",xs:"14px"},
            // gap:"28px",
            gap:{md:"24px",xs:"5px"},
            // width:"100%"

            


        }}>
        <Grid item  xs={5.5} md={2.5} sx={{width:"260px",  "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"10px"} 
        }} >
        
      <Card variant="outlined" sx={{display:"flex", alignItems:"center"}}>
           
               <Box>
        <CardContent sx={{padding:"18px",height:{md:"130px",xs:"0px"}}}>
            <Typography>Curent Balnace..</Typography>
            <Typography sx={{fontSize:"30px"}}>123456</Typography>
          {/* < Addbalance data={setBalance}/> */}
        </CardContent>
        </Box>
        <Box > <AccountBalanceOutlinedIcon sx={{fontSize:{md:"50px",xs:"30px"}, marginLeft:{md:"29px",xs:"0px"},color:"#6b7cff"}}/></Box>

      </Card>
     
      
    </Grid>
    <Grid item xs={5.7} md={2.5}  sx={{width:"260px", "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"9px"} 
        }} >
      <Card variant="outlined" sx={{display:"flex", alignItems:"center"}}>
                <Box>
        <CardContent sx={{padding:"15px",height:{md:"130px",xs:"0px"}}}>
            <Typography>Total Saving..</Typography>
            <Typography sx={{fontSize:"30px"}}>123456</Typography>
          {/* < Addbalance data={setBalance}/> */}
        </CardContent >
        </Box>
        <Box > <SaveIcon sx={{fontSize:{md:"50px",xs:"40px"}, marginLeft:{md:"40px",xs:"0px"} ,color:"#6b7cff"}}/></Box>
      </Card>
    </Grid>
    <Grid item xs={5.5} md={2.5}  sx={{width:"260px","&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"9px"}
          
    }} >
      <Card variant="outlined" sx={{borderRadius:"9px",display:"flex", alignItems:"center"}}>
          <Box>
        <CardContent sx={{padding:"18px",height:{md:"130px",xs:"0px"}}}>
            <Typography>Add expence</Typography>
            <Typography sx={{fontSize:"30px"}}>12345</Typography>
          {/* <Addexpence/> */}
        </CardContent>
        </Box>
        
        <Box > <CreditCardIcon sx={{fontSize:{md:"50px",xs:"40px"},color:"#6b7cff",marginLeft:{md:"55px",xs:"0px"}}}/></Box>
      </Card>
    </Grid>
    <Grid item xs={5.7} md={2.5}  sx={{width:"260px","&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"9px"}}} >
      <Card variant="outlined" sx={{borderRadius:"9px",display:"flex", alignItems:"center"}}>
        <Box>
        <CardContent sx={{padding:"20px",height:{md:"130px",xs:"0px"}}}>
            <Typography>Total expence</Typography>
            <Typography sx={{fontSize:"30px"}} >00000</Typography>
        </CardContent>
        </Box>
        <Box > <AttachMoneyIcon sx={{fontSize:{md:"50px",xs:"40px"},color:"#6b7cff",marginLeft:{md:"55px",xs:"0px"}}}/></Box>
      </Card>
    </Grid>

    </Grid>

    </Box>
  )
}

export default TopCard