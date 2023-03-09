import React from 'react'
import slacklogo from "../../assets/images/slack.svg"
import "./style.css"
function RoomWelcome() {
  return (
    <div className='welcome'>
      <img src={slacklogo} alt="" style={{width:"400px",height:"400px"}} />
      <h4 className='title'>SLACK</h4>
      <p className='tagline'>Make work life simpler, more pleasant and more productive.</p>
    </div>
  )
}

export default RoomWelcome
