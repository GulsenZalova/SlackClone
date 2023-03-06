import React, { useState } from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'
function Form() {
    const [account,setAccount]=useState(false)
    
  return (
    <div>
        {
            account ? (
                <Register account={account} setAccount={setAccount}/> 
            ):(
                <Login account={account} setAccount={setAccount}/>
            )
        }
    </div>
  )
}

export default Form
