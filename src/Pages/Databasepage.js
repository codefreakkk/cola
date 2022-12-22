import React from 'react'
import Database from '../components/Database';
import Navbar from '../components/Navbar';

function Databasepage({toggle, closeBar}) {
  return (
    <>
    <div style={{width: '100%', transition: '.4s', marginLeft: closeBar ? '8vh' : '33vh'}}>
        <Navbar toggle={toggle} closeBar={closeBar} />
        <Database/>
    </div>
    </>
  )
}

export default Databasepage