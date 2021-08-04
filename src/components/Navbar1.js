import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import kfs from '../images/kfs.png'
import '../styles/navbar1.css'
import '../styles/variables.css'
import {  Tween } from 'react-gsap';
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: 'var(--primary)',
      'text-decoration': 'underline solid var(--primary) 3px',
      'text-underline-offset': '5px'
    }
  } else {
    return { color: 'white' }
  }
}



function Navbar ({ history }) {
  console.log(history.location.pathname)

  return (
<nav className=" container navbar navbar-expand-md transprent navbar-dark">
    
    {
        (history.location.pathname==='/')?
        <Tween from={{ x: '200px', rotation: 180 }} duration={2} ease="back.out(1.7)">
        <img src={kfs} height="80vh" alt='kfs' className='logo' />
        </Tween>: <img src={kfs} height="80vh"alt='kfs' className='logo' />
    }
  
    <button 
        className="navbar-toggler custom-toggler"
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
    >
        <span className="navbar-toggler-icon"/>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="wrapper1">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className='nav-link' style={currentTab(history, '/')} aria-current='page' to='/'>
						Home
					</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'  style={currentTab(history, '/about')} aria-current='page' to='/about'>
						About
					</Link>
                </li>
                <li className="nav-item">
                            <Link className='nav-link'  style={currentTab(history, '/works')} aria-current='page' to='/works'>
								Work
							</Link>
                </li>
                <li className="nav-item">
                <Link className='nav-link' style={currentTab(history, '/members')} aria-current='page' to='/members'>
					Members
				</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link'  style={currentTab(history, '/contact')} aria-current='page' to='/contact'>
						<span>Contact Us</span>
					</Link>
                </li>

            </ul>
        </div>
    </div>
    <button type='button' className='blogbutton'>
		JOIN US
    </button>
</nav>
  )
}

export default withRouter(Navbar)
