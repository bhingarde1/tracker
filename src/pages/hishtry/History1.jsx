import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, TextField, Typography, MenuItem, Select, InputLabel, FormControl, Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import row from "../../data/Data.json";
import { green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddExpense from '../dilogbox/Addexpence';

const History1 = () => {
  // State for search input and selected category
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  let [openstate,setOpenstate]=useState(true)

  // Handler for search input
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // Handler for category selection
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filtered rows based on search and selected category
  const filteredRows = row.expenses.filter((expense) => {
    const matchesSearch = expense.category.toLowerCase().includes(search.toLowerCase()) ||
      expense.date.toLowerCase().includes(search.toLowerCase()) ||
      expense.amount.toString().includes(search) ||
      expense.amountLeft.toString().includes(search);
    
    const matchesCategory = selectedCategory ? expense.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
   
  });

  return (
    <Box sx={{display:"flex",justifyContent:"end"}}>
    <Box sx={{backgroundColor:"rgb(229, 236, 243)",width:openstate ? "85%":"96%"}}>
      <Navbar setOpenstate={setOpenstate}  />
      <Box sx={{
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
         margin: 'auto',
          marginTop:"68px",
       
        border: '1px solid #eae5e',
        // marginTop: '40px',
         padding: '10px',
        borderRadius: '10px',
         height: '100vh',
        backgroundColor: 'white',
        position: 'relative',
        // paddingBottom:"50px"
        // marginBottom:"20px"

      }}>
        <Box sx={{display:"flex",justifyContent:"space-between",width:'100%'}}>
            <Box sx={{display:"flex"}}>
         <Avatar sx={{ bgcolor: '#6b7cff'}}>
        <AssignmentIcon />
      </Avatar>
        <Typography variant="h6" sx={{ marginBottom: '20px' }}><b sx={{color:"white"}}>Transaction History</b></Typography>
        </Box>
       <Box >
        <Button
            variant='contained'
            sx={{ alignSelf: 'flex-top',display:"flex",justifyContent:"space-between"}}
          >
            <AddExpense/>
            {/* <NavLink to={"/expence"} sx={{color:"white"}} style={{ textDecoration: 'none', }}><b >Add Expence</b></NavLink> */}
          </Button>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', mb: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap:2 }}>
            <TextField
              placeholder='Search expenses'
              value={search}
               onChange={handleSearchChange}
              variant='outlined'
              fullWidth
              sx={{ flex: 1 }}
            />
            <FormControl variant="outlined" sx={{ minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Category"
              >
                <MenuItem value=""><em>All Categories</em></MenuItem>
                {/* Map categories dynamically if needed */}
                {Array.from(new Set(row.expenses.map(expense => expense.category))).map(category => (
                  <MenuItem key={category} value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          
        </Box>

        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell align="right">Amount Left</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((roww, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{roww.category}</TableCell>
                  <TableCell align="left">{roww.date}</TableCell>
                  <TableCell align="right">{roww.amount}</TableCell>
                  <TableCell align="right">{roww.amountLeft}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
    </Box>
  );
}

export default History1;
