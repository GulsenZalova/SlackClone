import { createContext, useState } from "react";


export const chatContext = createContext(null);

export const ChatProvider = ({ children }) => {
    const [roomID,setRoomID]=useState(null)
    const [visible,setVisible]=useState(true)
    const value={
       roomID,
       setRoomID,
       visible,
       setVisible
    }
    return <chatContext.Provider value={value}>{children}</chatContext.Provider>
}