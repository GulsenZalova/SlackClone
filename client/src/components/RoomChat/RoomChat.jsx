import React from 'react'
import user from "../../assets/images/user.svg"
import {Send } from '@mui/icons-material';

import "./style.css"
function RoomChat() {
  return (
    <div className='group-chat'>
      <div className='group-chat-name'>
        <div className='chat-container'>
          <h3>Front-end developers</h3>
        </div>
      </div>
      <div className='chat-container'>
        <div className='group-chat-messagges'>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>

          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
      <div className='chat-container'>
        <form className='messagge-form'>
          <input type="text" placeholder='Type a message here' />
          <button className='send-btn'><Send style={{color:"white",fontSize:"17px"}}/></button>
        </form>
      </div>
    </div>
  )
}

export default RoomChat
