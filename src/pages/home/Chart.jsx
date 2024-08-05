import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import userdata from "./../../data/Data.json";
import { Box, useTheme, useMediaQuery } from '@mui/material';

const Chart = () => {
  // Extract data from userdata
  let chatdata = userdata.monthData.map((e) => e.spends);
  const arr = [];
  let day = 1;
  for (let i = 0; i < userdata.monthData.length; i++) {
    arr.push(String(day));
    day++;
  }
  let data1 = userdata.store.map((e) => ({
    value: e.amount,
    label: e.category,
  }));

  // Theme and breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: theme.spacing(1),
        justifyContent: 'center',
      
      }}
    >
      <Box
        sx={{
          flex: 1,
          border: '1px solid rgb(205, 208, 205)',
          borderRadius: '10px',
           backgroundColor: 'white',
          // backgroundColor:"red",
          overflow: 'hidden',
          width:"400px",
          // marginLeft:"30px",
          marginLeft:{xs:"0px",md:"39px"},
         marginRight:{xs:"39px"}
        

        }}
      >
        <BarChart
          series={[
            { data: chatdata },
          ]}
          barLabel={(item, context) => {
            if ((item.value ?? 0) > 1000) {
              return 'high';
            }
            return context.bar.height < 60 ? null : item.value?.toString();
          }}
          height={isMobile ? 200 : 300}
          xAxis={[{
            data: arr,
            scaleType: 'band',
            colorMap: {
              type: 'piecewise',
              thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
              colors: ["#512da8"],
            },
          }]}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          border: '1px solid rgb(205, 208, 205)',
          borderRadius: '10px',
          backgroundColor: 'white',
          overflow: 'hidden',
          marginRight:{xs:"0px",md:"30px"},
         

        }}
      >
        <PieChart
          sx={{
            marginLeft: isMobile ? 0 : '5px',
            marginRight: isMobile ? 0 : '40px',
          }}
          series={[
            {
              data: data1,
              outerRadius: 110,
              paddingAngle: 1,
              cornerRadius: 2,
              startAngle: 2,
            },
          ]}
          height={isMobile ? 200 : 300}
        />
      </Box>
    </Box>
  );
};

export default Chart;
