import React from "react";
import '../assets/css/style.bundle.css';
import '../css/sidebar.css';
import Submenus from "./Submenus";
import Designing from "./Designing";
import Project from "./Project";
import Footer from "./Footer";
import Others from "./Others";
import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";

function Sidebar({ closeBar }) {
    return (
        <>
            <div className={`app-sidebar-menu flex-column-fluid ${closeBar ? 'slide-left' : 'slide-right'}`} id="sideBarScroll" style={{position: 'fixed'}}>
                <div id="kt_app_sidebar_menu_wrapper" style={{ overflowX: 'hidden' }} class="app-sidebar-wrapper hover-scroll-overlay-y my-5" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
                    <div class="menu menu-column menu-rounded menu-sub-indention" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                        <div style={{ borderBottom: '0.5px dashed rgba(113, 111, 111, 0.434)', marginBottom: '15px', marginTop: '-15px' }}>
                            <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                                <div style={{ display: 'flex' }}>
                                    <span><img src={logo} style={{ height: closeBar ? '22px' : '' }} height="35" alt="Logo here" /></span>
                                    <div>
                                       <NavLink to="/"> <span style={{ color: 'white', letterSpacing: 1, transition: '.1s', fontSize: '22px', display: closeBar ? 'none' : '' }}>Boolean</span></NavLink>
                                    </div>
                                </div>

                                {/* <span class="svg-icon svg-icon-2 rotate-180">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor" />
										<path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor" />
									</svg>
								</span> */}

                            </div>
                        </div>

                        {/* menu here */}
                        <Designing closeBar={closeBar} />
                        <Submenus closeBar={closeBar} />
                        <Project closeBar={closeBar} />
                        <Others closeBar={closeBar} />
                    </div>
                </div>
                <Footer closeBar={closeBar} />
            </div>
        </>
    )
}

export default Sidebar;