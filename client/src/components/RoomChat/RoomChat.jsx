import React, { useContext, useEffect } from 'react'
import SideBar from '../SideBar/SideBar';
import user from "../../assets/images/user.png"
import {Send,Menu} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import io from "socket.io-client"
import { axiosInstance } from "../../network/axiosInstance"
import { chatContext } from '../../store/ChatContext';
const socket=io("http://localhost:3000",{ transports: ['websocket', 'polling', 'flashsocket'] })
import "./style.css"
import { useState } from 'react';


function RoomChat() {
  const {roomID,setRoomID}=useContext(chatContext)
  const [value,setValue]=useState("")
  const [roomDetails,setRoomDetails]=useState(null)
  const [roomMessages,setMessages]=useState([])
  useEffect(()=>{
    socket.on("groupmessage",(res)=>{
      setMessages((prev)=>[...prev,res])
    })
  },[socket])
  useEffect(()=>{
    axiosInstance.get(`/group/get/conservation?id=${roomID}`).then((res)=>{
      setRoomDetails(res.data[0].channelName)
      setMessages(res.data[0].conservation)
    })
    console.log(roomDetails)
    console.log(roomMessages)
  },[roomID])

  const [state, setState] = React.useState({
    left: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };

  const sendMsg= async (e)=>{
    e.preventDefault()
    const messageContent={
      username:"Gulsen",
      message:value,
      room:roomID,
      image:"slack.svg",
      date:(new Date(Date.now())).getHours()+":"+(new Date(Date.now())).getMinutes()
    }
    if(value!=""){
     await socket.emit("send",messageContent)
     setMessages((prev)=>[...prev,messageContent])
      setValue("")
    }
    socket.emit("room",roomID)
  }

  return (
    <div className='group-chat'>
      <div className='group-chat-name'>
        <div className='chat-container'>
        <div className='chat-title'>
           <div className='chat-menu'>
           {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor,true)} className="menubtn"><Menu /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,backgroundColor:"#252329",height:"100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      {
        <SideBar/>
      }
    </Box>
          </Drawer>
        </React.Fragment>
      ))}
           </div>
          <h3>{roomDetails}</h3>
        </div>
        </div>
      </div>
      <div className='chat-container'>
        <div className='group-chat-messagges'>
    {
      roomMessages && (
        roomMessages.map((msg,i)=>(
          <div className='group-chat-messagge' key={i}>
          <div className='messagge-img'>
            <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
          </div>
          <div className='messagge-info'>
            <div className='messagge-desc'>
              <span className='sender-name'>{msg?.username}</span>
              <span className='send-date'>{msg?.date}</span>
            </div>
            <div className='messagge-content'>
              <p>{msg.message}</p>
            </div>
          </div>
        </div>
        ))
      )
    }
        </div>
      </div>
      <div className='chat-container'>
        <form className='messagge-form'>
          <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Type a message here' />
          <button className='send-btn' onClick={sendMsg}><Send style={{color:"white",fontSize:"17px"}}/></button>
        </form>
      </div>
      <div>
    </div>
    </div>
    
  )
}

export default RoomChat
