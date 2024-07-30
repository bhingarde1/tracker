import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import userdata from "./../../data/Data.json"
import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const Chart = () => {
  let chatdata = userdata.monthData.map((e) => e.spends)
  const arr = [];
  let day = 1
  for (let i = 0; i < userdata.monthData.length; i++) {
    arr.push(String(day))
    day++
  }
  let data1=userdata.store.map((e)=>({
    value:e.amount,
    label:e.category,
  }
   
  ))

  return (
    <Box sx={{
      //  width:"80%",
      // border: "1px solid rgb(205, 208, 205);",
      width: "90%",
      height:"300px",
      borderRadius: "10px",
      marginLeft: "70px",
      display: "flex",
      justifyContent:"space-between"
      //  justifyContent:"center",
      //  alignItems:"center",
      //   box-shadow: "10px 10px 15px rgba(0, 0, 0, 0.3)"



    }}>
      <Box sx={{
        border: "1px solid rgb(205, 208, 205);",
        width: "50%",
        borderRadius: "10px",
        backgroundColor: "white"
      }}>

        <BarChart
          series={[
            { data: chatdata }
          ]}
          barLabel={(item, context) => {

            if ((item.value ?? 0) > 1000) {
              return 'high';
            }
            return context.bar.height < 60 ? null : item.value?.toString();
          }}
          height={300}
          
          xAxis={[{
            data: arr, scaleType: 'band',
            colorMap: {
              type: 'piecewise',
              thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
              colors: ["#512da8"],
            }
          }]}
        //   margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Box>

      <Box sx={{ border: "1px solid rgb(205, 208, 205);",
        width: "40%",
        borderRadius: "10px",
        backgroundColor: "white"}}>

<PieChart
sx={{marginLeft:"30px",gap:"30px"}}
      series={[
        {
          data: data1,
          // innerRadius: 6,
           outerRadius: 110,
           paddingAngle: 1,
           cornerRadius: 2,
           startAngle: 2,
          // endAngle: 213,
          // cx: 100,
          // cy: 150,
          
        },
      ]}
    
      height={300}
      
    />
       
      </Box>
    </Box>
  )
}
export default Chart