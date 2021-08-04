import * as React from 'react'
import '../styles/events.css'
import Navbar from '../components/Navbar1.js'
import Image1 from '../images/kauc.jpg'
import { Link} from 'react-router-dom'
function Events () {
  return (
    <div className='events'>
      <Navbar />
      <div className='container'>
        {/* <div className='row'> */}
          {/* <div className='col-md-12 m-10'> */}
            <div className='eventbox'>
              <img src={Image1} alt='' />
              <div className='evinfo'>
                <h3 className='evhead'>Auditions</h3>
                <div className='evtxt'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
								</div>
                <Link to="/eventwork"><button type='button' className='btn registerbtn'>Register</button></Link>
              </div>
            </div>
          {/* </div> */}
         {/* </div> */}
      </div>
    </div>
  )
}

export default Events
