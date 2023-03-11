import React from 'react'

function Message({message}) {
  return (
    <div>
      <img src={message} alt="" style={{width:"200px",height:"200px",objectFit:"cover"}} />
    </div>
  )
}

export default Message
