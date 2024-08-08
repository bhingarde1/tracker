// import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { PieChart } from '@mui/x-charts/PieChart';
// import userdata from "./../../data/Data.json";
// import { Box, useTheme, useMediaQuery } from '@mui/material';

// const Chart = () => {
//   // Extract data from userdata
//   let chatdata = userdata.monthData.map((e) => e.spends);
//   const arr = [];
//   let day = 1;
//   for (let i = 0; i < userdata.monthData.length; i++) {
//     arr.push(String(day));
//     day++;
//   }
//   let data1 = userdata.store.map((e) => ({
//     value: e.amount,
//     label: e.category,
//   }));

//   // Theme and breakpoints
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: 'auto',
//         padding: theme.spacing(2),
//         display: 'flex',
//         flexDirection: isMobile ? 'column' : 'row',
//         // gap: theme.spacing(0),
//         gap:{md:"5px",xs:"5px"},
//         justifyContent: 'center',
      
//       }}
//     >
//       <Box
//         sx={{
//           flex: 1,
//           border: '1px solid rgb(205, 208, 205)',
//           borderRadius: '10px',
//            backgroundColor: 'white',
//           // backgroundColor:"red",
//           overflow: 'hidden',
        
//           width:{md:"520px",xs:"100%"},
//           // marginLeft:"30px",
//           marginLeft:{xs:"0px",md:"57px"},
//          marginRight:{xs:"39px"},
//          paddingLeft:{md:"45px",xs:'0px'}
        

//         }}
//       >
//         <BarChart
//           series={[
//             { data: chatdata },
//           ]}
//           // barLabel={(item, context) => {
//           //   if ((item.value ?? 0) > 1000) {
//           //     return 'high';
//           //   }
//           //   return context.bar.height < 60 ? null : item.value?.toString();
//           // }}
//           height={isMobile ? 200 : 300}
//           xAxis={[{
//             data: arr,
//             scaleType: 'band',
//             colorMap: {
//               type: 'piecewise',
//               thresholds: [new Date(2021, 1, 1), new Date(2023, 1, 1)],
//               colors: ["#512da8"],
//             },
//           }]}
//         />
//       </Box>

//       <Box
//         sx={{
//           flex: 1,
//           border: '1px solid rgb(205, 208, 205)',
//           borderRadius: '10px',
//           backgroundColor: 'white',
//           // overflow: 'hidden',
//           overflow:{md:"hidden",xs:"auto"},
//            marginRight:{xs:"0px",md:"30px",sm:"0px"},
//            paddingRight:{md:"40px",xs:"0px"}
//         }}
//       >
//         <PieChart
//          height={isMobile ? 200 : 300}
//           sx={{
//             marginLeft: isMobile ? 0 : '0px',
//              marginRight: isMobile ? 0 : '60px',
           
//           }}
//           series={[
//             {
//               data: data1,
//               // outerRadius:100,
//               outerRadius: isMobile ? 80 : 100,
//               paddingAngle: 1,
//               cornerRadius: 2,
//               startAngle: 2,
//             },
//           ]}
         
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Chart;


// //////////////////////////

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import userdata from './../../data/Data.json';
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
        width: '97.5%',
        height: 'auto',
        padding: theme.spacing(1),
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '22px', // Set consistent gap between the charts
        marginLeft: isMobile ? '0px' : '62px', // Adjust margin for desktop view
        justifyContent: 'center',
        //  marginRight: isMobile ? '0px' : '80px',
      }}
    >
      <Box
        sx={{
          flex: 1,
          border: '1px solid rgb(205, 208, 205)',
          borderRadius: '10px',
          backgroundColor: 'white',
          overflow: 'hidden',
          width: isMobile ? '100%' : '510px', // Responsive width
          paddingLeft: isMobile ? '0px' : '45px',
          marginLeft:{md:"20px",xs:"0px"}
        }}
      >
        <BarChart
          series={[
            { data: chatdata },
          ]}
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
          overflow: isMobile ? 'auto' : 'hidden',
          paddingRight: isMobile ? '0px' : '0px',
          marginRight:{md:"56px",xs:"0px"}
        }}
      >
        <PieChart
          height={isMobile ? 200 : 300}
          sx={{
            marginLeft: isMobile ? 0 : '0px',
            marginRight: isMobile ? 0 : '60px',
          }}
          series={[
            {
              data: data1,
              outerRadius: isMobile ? 80 : 100,
              paddingAngle: 1,
              cornerRadius: 2,
              startAngle: 2,
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Chart;







