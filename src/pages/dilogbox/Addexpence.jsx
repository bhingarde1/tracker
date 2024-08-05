
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// const Addexpence=()=>{
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="text" onClick={handleClickOpen}>
//        + Add Expenses
//       </Button>
//       <Dialog
//         open={open}
//         onClose={handleClose} 
//       >
//         <DialogTitle>Add Expenses</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//           Add Expenses..
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
           
//             fullWidth
//             variant="outlined"
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

// export default Addexpence;

///////////////////////////////////////  New edit code /////////////////////////////////////////////////////////
import * as React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const AddExpense = () => {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // Clear the fields when closing
    setAmount('');
    setCategory('');
    setDescription('');
    setDate('');
  };

  const handleSave = () => {
    // Handle save logic here (e.g., send data to API or update state)
    console.log({ amount, category, description, date });
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant='text' sx={{color:"white"}}  onClick={handleClickOpen}>
        + Add Expense
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the details of your expense.
          </DialogContentText>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="description"
                label="Description"
                type="text"
                fullWidth
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                margin="dense"
                id="amount"
                label="Amount"
                type="number"
                fullWidth
                variant="outlined"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                margin="dense"
                id="date"
                label="Date"
                type="date"
                fullWidth
                variant="outlined"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="dense">
                <InputLabel>Category</InputLabel>
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  label="Category"
                >
                  <MenuItem value=""><em>None</em></MenuItem>
                  <MenuItem value="Food">Food</MenuItem>
                  <MenuItem value="Transport">Transport</MenuItem>
                  <MenuItem value="Utilities">Utilities</MenuItem>
                  <MenuItem value="Entertainment">Entertainment</MenuItem>
                  {/* Add more categories as needed */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddExpense;

       

