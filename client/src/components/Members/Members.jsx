import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { chatContext } from '../../store/ChatContext';
import {axiosInstance} from "../../network/axiosInstance"
import "./style.css"
import { useEffect,useState,useContext} from 'react';
function Members() {
    const { roomID,setVisible} = useContext(chatContext)
    const [members,setMembers]=useState([])
    useEffect(()=>{
        axiosInstance.get(`/group/get/members?id=${roomID}`).then((res) => {
            setMembers(res.data[0].members)
          })
          console.log(members)
    },[roomID])
    const handleClose=()=>{
        setVisible(true)
    }
    console.log(members)
  return (
      <div className='side'>
         <div className='sidebar-header'>
            <button className='addbtn' onClick={handleClose}>< ArrowBackIosIcon  style={{width:"20px",height:"20px"}}/></button>
            <span className='title'>All Channels</span>
        </div> 
        <div className='sidebar-main'>
            <div className='sidebar-description'>
                <span className='channel-name'>Front-end developers</span>
                <p>Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan quis. In gravida mollis purus, at interdum arcu tempor non</p>
            </div>
            <div className='main-title'>
                <h3>Members</h3>
            </div>
            <div className='sidebar-group'>
                {
                    members.length>0 ? (
                        members.map((member,index)=>(
                            <div className='sidebar-group-item' key={index}>
                            <span className='group-logo'>{ member.userName ? member.userName.split(" ").map(x=>x[0]) : ""}</span>
                            <span className='group-name'>{member.userName ? member.userName : ""}</span>
                        </div>
                        ))
                    ):(
                        <h5>There are no users in the group</h5>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Members
