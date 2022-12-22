import React from 'react'
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function MenuItem({ closeBar }) {

    return (
        <>
            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                <span class="menu-link">
                    <span class="menu-icon">
                        <span class="svg-icon svg-icon-2">
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="currentColor" />
                                    <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="currentColor" />
                                </svg>
                            </span>
                        </span>
                    </span>
                    {/* <span class="menu-title" style={{ color: '#9D9DA6', cursor: 'pointer' }}>Dashboards</span> */}
                    <NavLink to='/' style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title inbox" style={{ cursor: 'pointer', display: closeBar ? 'none' : '' }}>Inbox</span></NavLink>
                </span>
            </div>

            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                <span class="menu-link">
                    <span class="menu-icon">
                        <span class="svg-icon svg-icon-2">
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="currentColor" />
                                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="currentColor" />
                                </svg>
                            </span>
                        </span>
                    </span>
                    {/* <span class="menu-title" style={{ color: '#9D9DA6', cursor: 'pointer' }}>Dashboards</span> */}
                    <NavLink to='/write' style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title inbox" style={{ cursor: 'pointer', display: closeBar ? 'none' : '' }}>Write mail</span></NavLink>
                </span>
            </div>

            <div class="menu-content">
                <span class="menu-heading fw-bold text-uppercase fs-7" style={{ color: '#b3b3b3', opacity: .5, display: closeBar ? 'none' : '' }}>ACTIVITY</span>
            </div>

            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                <span class="menu-link">
                    <span class="menu-icon">
                        <span class="svg-icon svg-icon-2">
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="currentColor" />
                                    <path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="currentColor" />
                                </svg>
                            </span>
                        </span>
                    </span>
                    <NavLink style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })} to='/activites'><span class="menu-title" style={{ cursor: 'pointer', display: closeBar ? 'none' : '' }}>All Activity</span></NavLink>
                    {/* <span class="menu-title" style={{ color: 'white', cursor: 'pointer' }}>Inbox</span> */}
                </span>
            </div>

            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                <span class="menu-link">
                    <span class="menu-icon">
                        <span class="svg-icon svg-icon-2">
                            <span class="svg-icon svg-icon-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z" fill="currentColor" />
                                    <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                                </svg>
                            </span>
                        </span>
                    </span>
                    <NavLink to='/upload' style={({ isActive }) => (isActive ? { color: 'white' } : { color: '#9D9DA6' })}><span class="menu-title" style={{ cursor: 'pointer', display: closeBar ? 'none' : '' }}>Upload Docs</span></NavLink>
                    {/* <span class="menu-title" style={{ color: 'white', cursor: 'pointer' }}>Inbox</span> */}
                </span>
            </div>

            <div class="menu-content">
                <span class="menu-heading fw-bold text-uppercase fs-7" style={{ color: '#b3b3b3', opacity: .5, display: closeBar ? 'none' : '' }}>Development</span>
            </div>
        </>
    )
}

export default MenuItem;