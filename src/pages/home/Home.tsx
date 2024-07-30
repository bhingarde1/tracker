import React from 'react'
import Navbar from '../../component/Navbar'
import Chart from './Chart'
import TopCard from '../cards/TopCard'
import { Box } from '@mui/material'
import Hishtry from '../hishtry/Hishtry'




const Home = () => {
  return (
    <Box sx={{backgroundColor:"rgb(229, 236, 243)",width:"100%"}} >
        <Navbar/> 
        <TopCard/>
        <Chart/>
        <Hishtry/>
        
    </Box>
  )
}

export default Home