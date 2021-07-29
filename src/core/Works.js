import * as React from 'react'
<<<<<<< HEAD
import Navbar from '../components/Navbar'
import '../styles/works.css'
import Vector from '../images/Vector.png'
import { Link } from 'react-router-dom'

function Works () {
  return (
    <div>
      <Navbar />
      <img src={Vector} alt='something ' className='vector' />

      <div className='works'>
        <h1>OUR WORK</h1>
        <p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna.
				</p>
        <div className='work-buttons'>
          <Link to='#' style={{ color: 'black', textDecoration: 'none' }}>
            <button type='button' className='button'>
              <i class='fab fa-youtube' />Short Films
						</button>
          </Link>
          <Link to='#' style={{ color: 'black', textDecoration: 'none' }}>
            <button type='button' className='button'>
              <i class='fab fa-medium' />Blogs
						</button>
          </Link>
        </div>
      </div>
    </div>
=======
import Navbar from '../components/Navbar1';
import Wave from 'react-wavify'
import '../styles/works.css'
import {Link} from 'react-router-dom'

function Works(){
return(
    <div className="cont1">
    
  <Navbar/>
  <div className='works'>
    <h1>OUR WORK</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    <div className='work-buttons'>
    <Link to="#" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="button"><i class="fab fa-youtube"/>Short Films</button></Link>
    <Link to="#" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="button"><i class="fab fa-medium"/>Blogs</button></Link>
    
    </div>
    
 </div>
 <div className="wave">
 <Wave fill='#2F2F2F'
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.25,
          points: 3
        }}
  />
</div>
</div>
>>>>>>> 51b12fee1f7971747a0e9db8bf3485cbab29356f
  )
}

export default Works
