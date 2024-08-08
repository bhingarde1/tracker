
import  React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import row from "../../data/Data.json"
import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const Hishtry=()=> {
  const arr=[];
  for(let i=0;i<=4;i++){
    arr.push(row.expenses[i])
  }
  return (
    <TableContainer sx={{width:"90%",display:"flex",
    justifyContent:"center",alignItems:"center",
        margin:"auto",
        border:"1px solid black",
        marginTop:"20px",
        padding:"10px",
          borderRadius:"10px",
          height:"400px",
          backgroundColor:"white",
          position:"relative",
          marginBottom:"20px",
          marginLeft:{md:"85px",xs:"0px"}

    }} >
      <Table sx={{ minWidth: 650,margin:"auto",padding:"10px",
      
      }} aria-label="simple table">
      
        <TableHead>
         
          
          <Typography sx={{marginLeft:"10px"}}><b>Latest  History... </b> </Typography> 

          <TableRow>
           
            <TableCell align="left" >Category</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Amount Left</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((roww) => (
            <TableRow
            //   key={row.n}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {/* <TableCell component="th" scope="row">
                
              </TableCell> */}
              <TableCell align="left">{roww.category}</TableCell>
              <TableCell align="left">{roww.date}</TableCell>
              <TableCell align="right">{roww.amount}</TableCell>
              <TableCell align="right">{roww.amountLeft}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant='contained'  sx={{position:"absolute",top:"10px",right:"20px",textDecoration:"none",color:"white" ,width:"130px"}}>
        <NavLink className={"nav"} sx={{color:"white"}}
        to={"/history1"}><b >History</b></NavLink></Button>
    </TableContainer>
  );
}

export default Hishtry;



