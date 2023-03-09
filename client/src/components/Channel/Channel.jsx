import React, { useContext } from 'react'
import { useState } from 'react';
import { AddBox, Search } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { axiosInstance } from "../../network/axiosInstance"
import { chatContext } from '../../store/ChatContext';
import "./style.css"
import { useEffect } from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Channel() {
  const {roomID,setRoomID,setVisible,setShowChat}=useContext(chatContext)
  const [channels, setChannels] = useState([])
  const [open, setOpen] = useState(false);
  const [members,setMembers]=useState([])
  const [search,setSeacrh]=useState("")
  const [newChannel, setNewChannel] = useState({
    channelName: "",
    channelDescription: ""
  })
  useEffect(() => {
    axiosInstance.get(`/group/get/channelList?channelName=${search}`).then((res) => {
      setChannels(res.data)
    })
  }, [channels])

  useEffect(()=>{
    axiosInstance.get(`/group/get/members?id=${roomID}`).then((res) => {
      setMembers(res.data[0].members)
    })
  },[roomID])
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value

    setNewChannel({
      ...newChannel,
      [name]: value
    })

  }
  const handleSubmit = () => {
    // console.log(newChannel)
    if (newChannel.channelName != "" && newChannel.channelDescription != "") {
      axiosInstance.post("/group/new/newchannel", {
        channelName: newChannel.channelName,
        channelDescription: newChannel.channelDescription
      })
    }
  }

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick=()=>{
    handleSubmit()
    handleClose()
  }
  const  handleChannelInfo= async (channel)=>{
    const info=JSON.parse(localStorage.getItem("user"))
    console.log(info)
    setRoomID(channel.id)
    setVisible(false)
    setShowChat(false)
    // console.log(members)
    const findMember=members.find((member)=>member.email==info.email)
    // console.log(findMember)
    if(!findMember){
     await axiosInstance.post(`/group/new/newmember?id=${roomID}`, {
      userName: info.username,
      email:info.email,
      userİmage: info.image,
    })
    }
  }
  const handleSearch=(e)=>{
    setSeacrh(e.target.value)
  }
  return (
    <div className='side'>
      <div className='sidebar-header'>
        <span className='title'>Channels</span>
        <button className='addbtn' onClick={handleClickOpen}><AddBox style={{ width: "32px", height: "32px" }} /></button>
      </div>
      <div className='sidebar-main'>
        <form>
          <button><Search style={{ width: "19px", height: "19px" }} /></button>
          <input type="text" placeholder='search' onChange={handleSearch} />
        </form>
        <div className='sidebar-group'>
          {
            channels && (
              channels.map((channel,index) => (
                <div className='sidebar-group-item' key={index} onClick={()=>handleChannelInfo(channel)}>
                  <span className='group-logo'>{channel.name.split(" ").map(x=>x[0])}</span>
                  <span className='group-name'>{channel.name}</span>
                </div>
              ))
            )
          }
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{ sx: { backgroundColor: "#120F13" } }}
      >
        <DialogTitle style={{ color: "#F2F2F2", fontSize: "18px" }}>{"New Channel"}</DialogTitle>
        <DialogContent>
          <form className='channel-form'>
            <input type="text" name='channelName' placeholder='Channel name' onChange={handleChange} />
            <textarea name="channelDescription" id="" cols="60" rows="5" placeholder='Channel Description' onChange={handleChange}></textarea>
          </form>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClick} type="submit" style={{ backgroundColor: "#2F80ED", color: "white", fontSize: "12px", textTransform: "capitalize", marginRight: "20px" }}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Channel
