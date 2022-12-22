import React from 'react'
import Navbar from './components/Navbar'
import Inbox from './components/Inbox';

function Rightpanel({toggle, closeBar}) {
  return (
    <div style={{width: '100%', transition: '.4s', marginLeft: closeBar ? '8vh' : '33vh'}}>
        <Navbar toggle={toggle} closeBar={closeBar} />
        <Inbox/>
    </div>
  )
}

export default Rightpanel