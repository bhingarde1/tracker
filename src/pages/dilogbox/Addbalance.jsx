
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Addbalance=({data})=>{
  const [open, setOpen] = React.useState(false);
  const [balance,setBalance]=React.useState(0)
  console.log(balance);
  const handle=(e)=>{
   data(e.target.value)
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
       +Add Balance.
      </Button>
      <Dialog
        open={open}
        onClose={handleClose} 
      >
        <DialogTitle>Add Balance.</DialogTitle>
        <DialogContent>
          <DialogContentText>
            + Add Balance..
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
           onChange={handle}
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Addbalance;