import React from 'react'
import Channel from '../Channel/Channel';
import UserOptions from '../UserOptions/UserOptions';
import Members from '../Members/Members';
import "./style.css"
import { useState } from 'react';
function SideBar() {
   const [visible,setVisible]=useState(false)
  return (
        <div>
            {
               !visible ? (
                  <Channel/> 
               ):(
                  <Members/>
               )
            }
            <UserOptions/>
        </div>
  )
}

export default SideBar
