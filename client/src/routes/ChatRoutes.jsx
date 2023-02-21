import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/login/Login'
import Confirm from '../pages/login/Confirm'
import PublicLayout from '../pages/layout/PublicLayout'
import ProtectLayout from '../pages/layout/ProtectLayout'
import Home from '../pages/chatpage/Home'
import Room from '../pages/chatpage/Room'
function ChatRoutes() {
    return (
        <div>
            <Routes element={<PublicLayout />}>
                <Route path='/' element={<Login />} />
                <Route path='confirm' element={<Confirm />} />
            </Routes>
            <Routes path="/chat" element={<ProtectLayout />}>
                <Route path='home' element={<Home />} />
                <Route path='room/:roomID' element={<Room />} />
            </Routes>
        </div>
    )
}

export default ChatRoutes
