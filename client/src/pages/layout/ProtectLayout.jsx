import React from 'react'
import {Outlet} from "react-router-dom"
import SideBar from '../chatpage/SideBar'
function ProtectLayout() {
  return (
    <div>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default ProtectLayout
