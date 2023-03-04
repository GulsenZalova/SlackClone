import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Message({message}) {
    const [imageSrc,setİmageSrc]=useState("")
    console.log(message)
    const blob=new Blob([message],{type:message.type})
    useEffect(()=>{
        const reader=new FileReader()
        reader.readAsDataURL(blob)
        reader.onloadend=function(){
            setİmageSrc(reader.result)
        }
    },[blob])
  return (
    <div>
      <img src={imageSrc} alt="" style={{width:"200px",height:"200px",objectFit:"cover"}} />
    </div>
  )
}

export default Message
