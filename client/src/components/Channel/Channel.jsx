import React from 'react'
import { useState } from 'react';
import { AddBox,Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import "./style.css"
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function Channel() {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  return (
    <div className='side'>
         <div className='sidebar-header'>
            <span className='title'>Channels</span>
            <button className='addbtn' onClick={handleClickOpen}><AddBox style={{width:"32px",height:"32px"}}/></button>
        </div> 
        <div className='sidebar-main'>
            <form>
                <button><Search style={{width:"19px",height:"19px"}} /></button>
                <input type="text" placeholder='search' />
            </form>
            <div className='sidebar-group'>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>FD</span>
                    <span className='group-name'>Front-end developers</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>R</span>
                    <span className='group-name'>random</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>B</span>
                    <span className='group-name'>BACK-END</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>CD</span>
                    <span className='group-name'>CATS AND DOGS</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>W</span>
                    <span className='group-name'>welcome</span>
                </div>
                
            </div>
        </div>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{ sx: { backgroundColor:"#120F13" } }}
      >
        <DialogTitle style={{color:"#F2F2F2",fontSize:"18px"}}>{"New Channel"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <form className='channel-form'>
            <input type="text" placeholder='Channel name' />
            <textarea name="" id="" cols="60" rows="5" placeholder='Channel Description'></textarea>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{backgroundColor:"#2F80ED",color:"white",fontSize:"12px",textTransform:"capitalize",marginRight:"20px"}}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Channel
