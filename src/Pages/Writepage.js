import React from 'react'
import Write from '../components/Write'
import Navbar from '../components/Navbar'

function Writepage({toggle, closeBar}) {
  return (
    <div style={{width: '100%', transition: '.4s', marginLeft: closeBar ? '8vh' : '33vh'}}>
        <Navbar toggle={toggle} closeBar={closeBar} />
        <Write/>
    </div>
  )
}

export default Writepage;

