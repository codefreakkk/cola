import React from 'react'
import Navbar from '../components/Navbar'
import Projectdetails from '../components/Projectdetails';

function Inboxpage({toggle, closeBar}) {
  return (
    <div style={{width: '100%', transition: '.4s', marginLeft: closeBar ? '8vh' : '33vh'}}>
        <Navbar toggle={toggle} closeBar={closeBar} />
        <Projectdetails/>
    </div>
  )
}

export default Inboxpage;