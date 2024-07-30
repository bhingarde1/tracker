import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import data from "../../data/Data.json"
import Addbalance from '../dilogbox/Addbalance'
import Addexpence from '../dilogbox/Addexpence'

const TopCard = () => {
    let curent=data.curentbalance.map((e)=>(e.balance))

    // let [balance,setBalance]=useState()

   

  return (
    <Box>
        <Grid  container  sx={{display:"flex",flexWrap:"wrap",
               
            height:"150px",alignItems:"center",
            
            // marginLeft:"59px",
            marginTop:"8px",
            marginBottom:"14px",
            marginLeft:"64px",
            gap:"28px"
            


        }}>
        <Grid item xs={6} md={2.5} sx={{width:"230px", "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"9px"} 
        }} >
      <Card variant="outlined" sx={{}}>

        <CardContent sx={{padding:"10px", }}>
            <Typography>Curent Balnace..</Typography>
            <Typography sx={{fontSize:"30px"}}>123456</Typography>
          {/* < Addbalance data={setBalance}/> */}
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} md={2.5}  sx={{width:"230px", "&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"9px"} 
        }} >
      <Card variant="outlined" sx={{}}>

        <CardContent sx={{padding:"10px", }}>
            <Typography>Curent Balnace..</Typography>
            <Typography sx={{fontSize:"30px"}}>123456</Typography>
          {/* < Addbalance data={setBalance}/> */}
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} md={2.5}  sx={{width:"230px","&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"9px"}
          
    }} >
      <Card variant="outlined" sx={{borderRadius:"9px"}}>
        <CardContent sx={{padding:"10px",
           
        }}>
            <Typography>Add expence</Typography>
            <Typography sx={{fontSize:"30px"}}>12345</Typography>
          {/* <Addexpence/> */}
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={6} md={2.5}  sx={{width:"230px","&:hover": { boxShadow: '0px 2px 4px rgb(117, 134, 148)',borderRadius:"9px"}}} >
      <Card variant="outlined" sx={{borderRadius:"9px"}}>
        <CardContent sx={{padding:"10px",
          
        }}>
            <Typography>Tottle expence</Typography>
            <Typography sx={{fontSize:"30px"}} >00000</Typography>
        </CardContent>
      </Card>
    </Grid>

    </Grid>

    </Box>
  )
}

export default TopCard