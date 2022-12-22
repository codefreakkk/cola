import React from 'react'
import user2 from '../images/user2.png'

function Profiledropdown({ openProfile }) {

    return (
        <>
            {/* profile dropdown */}
            <div className={`profile ${openProfile ? 'slide-up' : 'slide-down'}`}>
                <div class="menu-item px-3">
                    <div class="menu-content d-flex align-items-center px-3">
                        <div class="symbol symbol-20px me-5">
                        <div
        class="symbol symbol-35px symbol-circle"
        data-bs-toggle="tooltip"
        title="Alan Warden"
      >
        <span class="symbol-label bg-warning text-inverse-warning fw-bold">
          A
        </span>
      </div>
                            
                        </div>
                        <div class="d-flex flex-column">
                            <div class="fw-bold d-flex align-items-center fs-5">Max Smith
                                {/* <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span> */}
                            </div>
                            <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">max@kt.com</a>
                        </div>
                    </div>
                </div>
                <div class="separator my-2"></div>
                
                <div class="menu-item px-5">
                    <a href="../account/overview.html" class="menu-link px-5">My Profile</a>
                </div>
                
                <div class="menu-item px-5">
                    <a href="../account/statements.html" class="menu-link px-5">Account Settings</a>
                </div>

                <div class="menu-item px-5">
                    <a href="../account/statements.html" class="menu-link px-5">Sign Out</a>
                </div>
            </div>
        </>
    )
}

export default Profiledropdown;