import React from 'react'
import { Routes, Route } from "react-router-dom"
import Login from '../pages/login/Login'
import Confirm from '../pages/login/Confirm'
import PublicLayout from '../pages/layout/PublicLayout'
import ProtectLayout from '../pages/layout/ProtectLayout'
import ChatPage from '../pages/chatpage/ChatPage'
function ChatRoutes() {
    return (
        <div>
            <Routes element={<PublicLayout />}>
                <Route path='/' element={<Login />} />
                <Route path='confirm' element={<Confirm />} />
            </Routes>
            <Routes path="/chat" element={<ProtectLayout />}>
                <Route path='home' element={<ChatPage/>} />
                {/* <Route path='room/:roomID' element={<Room />} /> */}
            </Routes>
        </div>
    )
}

export default ChatRoutes
