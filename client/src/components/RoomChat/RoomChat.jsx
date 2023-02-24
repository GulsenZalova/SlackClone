import React from 'react'
import SideBar from '../SideBar/SideBar';
import user from "../../assets/images/user.png"
import {Send,Menu} from '@mui/icons-material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./style.css"


function RoomChat() {
  const [state, setState] = React.useState({
    left: false,
  });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className='group-chat'>
      <div className='group-chat-name'>
        <div className='chat-container'>
        <div className='chat-title'>
           <div className='chat-menu'>
           {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor,true)} className="menubtn"><Menu /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,backgroundColor:"#252329",height:"100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      {
        <SideBar/>
      }
    </Box>
          </Drawer>
        </React.Fragment>
      ))}
           </div>
          <h3>Front-end developers</h3>
        </div>
        </div>
      </div>
      <div className='chat-container'>
        <div className='group-chat-messagges'>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>

          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>

          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>

          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>

          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀</p>
              </div>
            </div>
          </div>
          <div className='group-chat-messagge'>
            <div className='messagge-img'>
              <img src={user} alt="" style={{ width: "42px", height: "42px" }} />
            </div>
            <div className='messagge-info'>
              <div className='messagge-desc'>
                <span className='sender-name'>Nellie Francis</span>
                <span className='send-date'>yesterday at 2:29 AM</span>
              </div>
              <div className='messagge-content'>
                <p>Suspendisse enim tellus, elementum quis dictum sed, sodales at mauris 😀
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className='chat-container'>
        <form className='messagge-form'>
          <input type="text" placeholder='Type a message here' />
          <button className='send-btn'><Send style={{color:"white",fontSize:"17px"}}/></button>
        </form>
      </div>
      <div>
    </div>
    </div>
    
  )
}

export default RoomChat
