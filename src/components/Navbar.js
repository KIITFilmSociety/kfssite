import React from 'react'
import '../styles/navbar.css'
import kfs from '../images/kfs.svg'
import { Link, withRouter } from 'react-router-dom'
import '../styles/variables.css'

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return {
      color: 'var(--primary)',
      'text-decoration': 'underline solid var(--primary) 3px',
      'text-underline-offset': '3px'
    }
  } else {
    return { color: 'white' }
  }
}

function Navbar ({ history }) {
  console.log(history)

  return (
    <nav className='navbar transparent navbar-expand-lg navbar-light '>
      <div className='container-fluid act'>
        <img src={kfs} alt='kfs' className='logo' />
        <button
          className='navbar-toggler '
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
				>
          <span className='navbar-toggler-icon' />
        </button>
        <div
          className='collapse nav-div navbar-collapse'
          id='navbarSupportedContent'
				>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                style={currentTab(history, '/')}
                aria-current='page'
                to='/'
							>
								Home
							</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='#'>
								About
							</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='#'>
								Work
							</Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                style={currentTab(history, '/members')}
                aria-current='page'
                to='/members'
							>
								Members
							</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' aria-current='page' to='#'>
								Contact Us
							</Link>
            </li>
          </ul>
        </div>
      </div>
      <button type='button' className='button'>
				Blogs
			</button>
    </nav>
  )
}

export default withRouter(Navbar)
