import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Grid} from '@mui/material';
import TextField from '@mui/material/TextField';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export default function Feedback(props) {
    // console.log("props are", props)
 const open= props.open;
 const setOpen=props.setOpen;
  const handleClose = () => setOpen(false);
  const [name, setName]=React.useState('');
  const [email, setEmail]=React.useState('');
  const [feedback, setFeedback]=React.useState('');
  return (
    <>
    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <Grid container spacing={2}>
            <Grid item>
           <TextField 
        id="input-with-icon-textfield"
        label="Name"
        onChange={(e)=>setName(e)}
        variant="standard"
      /> 
        </Grid>
        <Grid item>
        <TextField 
        id="input-with-icon-textfield"
        label="Email"
        onChange={(e)=>setEmail(e)}
        variant="standard"
      />
      </Grid>
      <Grid item>
        <TextField 
        id="input-with-icon-textfield"
        label="Feedback"
        onChange={(e)=>setFeedback(e)}
        variant="standard"
      />
      </Grid>
      <Grid item sx={{justifyContent:"center", alignItems:"center", textAlign:"center"}}>
      <Button mt={3} sx={{backgroundColor:"#14613D", color:"white", '&:hover': {
    backgroundColor: '#14613D',
    boxShadow: 'none',
  }, }}>Send Us Message</Button>
      </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
