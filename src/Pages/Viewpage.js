import React from 'react'
import View from '../components/View'
import Navbar from '../components/Navbar'

function Viewpage({toggle, closeBar}) {
  return (
    <div style={{width: '100%', transition: '.4s', marginLeft: closeBar ? '8vh' : '33vh'}}>
        <Navbar toggle={toggle} closeBar={closeBar} />
        <View/>
    </div>
  )
}

export default Viewpage;

