import React from 'react'
import { AddBox,Search } from '@mui/icons-material';
import "./style.css"
function SideBar() {
  return (
    <div>
        <div className='sidebar-header'>
            <span className='title'>Channels</span>
            <button className='addbtn'><AddBox style={{width:"32px",height:"32px"}}/></button>
        </div> 
        <div className='sidebar-main'>
            <form>
                <button><Search style={{width:"19px",height:"19px"}} /></button>
                <input type="text" placeholder='search' />
            </form>
            <div className='sidebar-group'>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>FD</span>
                    <span className='group-name'>Front-end developers</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>R</span>
                    <span className='group-name'>random</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>B</span>
                    <span className='group-name'>BACK-END</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>CD</span>
                    <span className='group-name'>CATS AND DOGS</span>
                </div>
                <div className='sidebar-group-item'>
                    <span className='group-logo'>W</span>
                    <span className='group-name'>welcome</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar
