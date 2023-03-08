import React from 'react'
import slacklogo from "../../assets/images/slack.svg"
import "./style.css"
function RoomWelcome() {
  return (
    <div className='welcome'>
      <div className='group-chat-name'>
        <div className='chat-container'>
          <div className='chat-title'>
            <div className='chat-menu'>
              {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button onClick={toggleDrawer(anchor, true)} className="menubtn"><Menu /></Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <Box
                      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300, backgroundColor: "#252329", height: "100vh" }}
                      role="presentation"
                      onClick={toggleDrawer(anchor, true)}
                      onKeyDown={toggleDrawer(anchor, true)}
                    >
                      {
                        <SideBar />
                      }
                    </Box>
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
            <h3>{roomDetails}</h3>
          </div>
        </div>
      </div>
      <div className='chat-container'>
        <div className='group-chat-messagges'>
          {
            roomMessages && (
              roomMessages.map((msg, i) => (
                <div className='group-chat-messagge' key={i}>
                  <div className='messagge-img'>
                    <span className='user-title'>{msg?.user?.split(" ").map(x=>x[0])}</span>
                  </div>
                  <div className='messagge-info'>
                    <div className='messagge-desc'>
                      <span className='sender-name'>{msg?.user}</span>
                      <span className='send-date'>{msg?.timeStamp}</span>
                    </div>
                    <div className='messagge-content'>
                          {
                            msg.type=="file" ? (
                              <Message message={msg.message}/>
                            ): (
                              <p onClick={(e)=>{console.log(msg)}}>{msg?.message}</p>
                            )
                          }
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
      <img src={slacklogo} alt="" style={{width:"400px",height:"400px"}} />
      <h4 className='title'>SLACK</h4>
      <p className='tagline'>Make work life simpler, more pleasant and more productive.</p>
    </div>
  )
}

export default RoomWelcome
