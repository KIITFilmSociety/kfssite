import * as React from 'react'
import Navbar from '../components/Navbar'
import '../styles/about.css'
import { Link } from 'react-router-dom'

function About () {
  return (
    <div>
      <Navbar />
      <div className='about'>
        <p className='f1'>
          <h1>ABOUT</h1>When light falls on you and the camera rolls, the entire
					universe changes. KFS has the unique ability to give the students of
					KIIT a platform where they can be their own Heroes. No more dreaming
					of being in a film, students can be in it with their talents and
					capabilities.
					<div className='f2'>
  <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna.
						</p>
					</div>
        </p>

        <Link to='#' style={{ color: 'black', textDecoration: 'none' }}>
          <button type='button' className='button'>
						Achivements
					</button>
        </Link>
      </div>
    </div>
  )
}

export default About
