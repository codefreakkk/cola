import React from 'react'
import '../css/sidebar.css';
import Profiledropdown from './Profiledropdown';
import {useState} from 'react';
import user2 from '../images/user2.png'
import user4 from '../images/user4.png'

function Navbar({ toggle, closeBar }) {
    
    const [state, setState] = useState(false);

    function toggleProfile() {
        setState(!state);
        // alert(state)
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: 'white'}}>
                <div class="container-fluid">

                    <div className='sidebar-icon svg-icon svg-icon-2' onClick={toggle}>
                        <svg style={{ rotate: closeBar ? '180deg' : '', transition: '.7s', color: closeBar ? '#009EF7' : '' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor" />
                            <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor" />
                        </svg>
                    </div>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ padding: '5px', marginLeft: '15px' }}>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" style={{ marginRight: '0px' }}>
                                <a class="nav-link nav-active" style={{ color: '#009ef7', padding: '10px 20px' }} aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item" style={{ marginRight: '0px' }}>
                                <a class="nav-link" style={{ color: '#5E6278', padding: '10px 20px' }} aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item" style={{ marginRight: '0px' }}>
                                <a class="nav-link" style={{ color: '#5E6278', padding: '10px 20px' }} aria-current="page" href="#">Help</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                        <input class="form-control search me-2" type="search" placeholder="Search" aria-label="Search"/>
        
                            <div style={{ marginLeft: '15px',marginRight: '30px', color: 'gray', cursor: 'pointer' }} onClick={toggleProfile}>
                                <img src={user4} height="27"/>
                            </div>

                        </form>
                    </div>
                </div>
            </nav >
            <Profiledropdown openProfile={state}/>
        </>
    )
}

export default Navbar