import React, { useEffect } from 'react'
import Navbar from '../../component/Navbar'
import Chart from './Chart'
import TopCard from '../cards/TopCard'
import { Box } from '@mui/material'
import Hishtry from '../hishtry/Hishtry'
import { useNavigate } from 'react-router-dom'




const Home = () => {
  let nav=useNavigate();
  let locle=localStorage.getItem("registrationData")
  useEffect(
    ()=>{
      if (!locle) {
          nav("/login")
        
      }

    }
    ,[]
  )
  return (
    <Box   sx={{backgroundColor:"rgb(229, 236, 243)",width:'100%',overflow:'hidden'}} >
          <Box>
          <Navbar/> 
          </Box>
       
        <TopCard/>
        <Chart/>
        <Hishtry/>
        
    </Box>
  )
}

export default Home