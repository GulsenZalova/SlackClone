import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./style.css"
function Members() {
  return (
      <div className='side'>
         <div className='sidebar-header'>
            <button className='addbtn'>< ArrowBackIosIcon  style={{width:"20px",height:"20px"}}/></button>
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
                <div className='sidebar-group-item'>
                    <span className='group-logo'>FD</span>
                    <span className='group-name'>Xanthe Neal</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>R</span>
                    <span className='group-name'>Nellie Francis</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>B</span>
                    <span className='group-name'>Denzel Barrett</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>CD</span>
                    <span className='group-name'>Shaunna Firth</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>W</span>
                    <span className='group-name'>Annaliese Huynh</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Members
