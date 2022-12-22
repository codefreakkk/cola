import React from 'react'

function Footer({ closeBar }) {
    return (
        <>
            <div class="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6 sidebar-footer" id="" style={{display: closeBar ? 'none' : '' }}>
                <div class="footer-text">You're in a team-managed project</div>
                <span class="footer-text" style={{ color: '#6B778C'}}>Learn more</span>

            </div>
        </>
    )
}

export default Footer;