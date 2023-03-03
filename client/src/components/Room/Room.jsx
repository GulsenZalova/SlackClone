import React, { useContext, useState } from 'react'
import RoomWelcome from '../RoomWelcome/RoomWelcome'
import RoomChat from '../RoomChat/RoomChat'
import { chatContext } from '../../store/ChatContext'
function Room() {
  const {visible}=useContext(chatContext)
  return (
    <div>
      {
        visible ? (
          <RoomWelcome/>
        ):(
          <RoomChat/>
        )
      }
    </div>
  )
}

export default Room
