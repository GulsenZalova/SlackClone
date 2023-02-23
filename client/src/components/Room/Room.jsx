import React, { useState } from 'react'
import RoomWelcome from '../RoomWelcome/RoomWelcome'
import RoomChat from '../RoomChat/RoomChat'
function Room() {
  const [visible,setVisible]=useState(false)
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
