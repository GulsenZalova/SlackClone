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
import {axiosInstance} from "../../network/axiosInstance"
import "./style.css"
import { useEffect } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



function Channel() {
    const [channels,setChannels]=useState([])
    const [open, setOpen] = useState(false);
    const [newChannel,setNewChannel]=useState({
      channelName:"",
      channelDescription:""
    })

    useEffect(()=>{
      axiosInstance.get("/group/get/channelList").then((res)=>{
        setChannels(res.data)
      })
    },[channels])

    const handleChange=(e)=>{
      let name=e.target.name
      let value=e.target.value

      setNewChannel({
        ...newChannel,
        [name]:value
      })

    }

    const handleSubmit=()=>{
       if(newChannel.channelName!="" && newChannel.channelDescription!=""){
        axiosInstance.post("/group/new/newchannel",{
          channelName:newChannel.channelName,
          channelDescription:newChannel.channelDescription
        })
       }
    }
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
              {
                channels && (
                   channels.map(channel=>(
                    <div className='sidebar-group-item'>
                    <span className='group-logo'>{channel.name[0]}</span>
                    <span className='group-name'>{channel.name}</span>
                </div>
                   ))
                )
              }
              
                {/* <div className='sidebar-group-item'>
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
                </div> */}
                
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
            <form className='channel-form' onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Channel name' onChange={handleChange} />
            <textarea name="description"  id="" cols="60" rows="5" placeholder='Channel Description' onChange={handleChange}></textarea>
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
