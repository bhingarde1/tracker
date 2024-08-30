import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar'
import Chart from './Chart'
import TopCard from '../cards/TopCard'
import { Box } from '@mui/material'
import Hishtry from '../hishtry/Hishtry'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const[openstate,setOpenstate]=useState(true);
  let nav=useNavigate();
  let locle=localStorage.getItem("token")
  useEffect(
    ()=>{
      if (!locle) {
          nav("/login")  
      }
    }
    ,[]
  )
  
  return (
    <Box   sx={{backgroundColor:"rgb(229, 236, 243)",width:'100%',overflow:'hidden',display:"flex",justifyContent:'end'}} >
          
          <Navbar setOpenstate={setOpenstate} /> 
          <Box  sx={{width:openstate?"87%":"100%"}}>
        <TopCard/>
        <Chart/>
        <Hishtry/>
       
          </Box >
         
        
    </Box>
  )
}

export default Home