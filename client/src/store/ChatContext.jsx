import { createContext, useState } from "react";


export const chatContext = createContext(null);

export const ChatProvider = ({ children }) => {
    const [roomID,setRoomID]=useState(null)
    const value={
       roomID,
       setRoomID
    }
    return <chatContext.Provider value={value}>{children}</chatContext.Provider>
}