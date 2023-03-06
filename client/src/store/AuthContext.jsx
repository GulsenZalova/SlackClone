import { createContext, useState } from "react";


export const authContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loginStatus, setloginStatus] = useState(false);
    const [register,setResgister]=useState({
        username:"",
        email:"",
        password:"",
        image:""
    })
    const value={
        loginStatus,
        register,
        setloginStatus,
        setResgister,
        user,
        setUser
    }
    return <authContext.Provider value={value}>{children}</authContext.Provider>

}
