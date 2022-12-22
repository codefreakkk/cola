import React from 'react'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { NavLink } from 'react-router-dom';

function Submenus({ closeBar }) {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                <span class="menu-link" onClick={() => setToggle(!toggle)}>
                    <span class="menu-icon">
                        <span class="svg-icon svg-icon-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z" fill="currentColor" />
                                <path opacity="0.3" d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z" fill="currentColor" />
                            </svg>
                        </span>
                    </span>
                    <span class="menu-title" style={{ color: '#9D9DA6', cursor: 'pointer', display: closeBar ? 'none' : '' }}>Code</span>
                    {/* <span class="menu-title" style={{ color: 'white', cursor: 'pointer' }}>Dashboards</span> */}
                    <span class="menu-arrow" style={{ display: closeBar ? 'none' : '' }} ></span>
                </span>

                {toggle && !closeBar && <AnimatePresence> <motion.div class="" id="dashboard_submenu"
                    initial={{ opacity: 0, transitionDelay: 4 }}
                    animate={{
                        opacity: 1,
                    }}>

                    <div class="menu-item">
                        <div class="menu-link">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <NavLink to="/projectdetails" style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title">Project Details</span></NavLink>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-link">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <NavLink to="/mytasks" style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title">My Tasks</span></NavLink>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-link">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <NavLink to="/updatework" style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title">Update Work</span></NavLink>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-link">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <NavLink to="/target" style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title">Target</span></NavLink>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-link">
                            <span class="menu-bullet">
                                <span class="bullet bullet-dot"></span>
                            </span>
                            <NavLink to="/createissue" style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title" >Create Issue</span></NavLink>
                        </div>
                    </div>
                </motion.div></AnimatePresence>}
            </div>
        </>
    )
}

export default Submenus