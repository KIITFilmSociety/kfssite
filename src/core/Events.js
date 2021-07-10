import * as React from 'react'
import '../styles/events.css'
import Navbar from '../components/Navbar.js'
import Image1 from '../images/kauc.jpg'
function Events () {
  return (
    <div className='App'>
      <Navbar />
      <div className="container" >
        <div className="row">
          
          <div className="col-6 m-10">
            <div className="eventbox">  
            <img src={Image1} alt="" />
            <div className="evinfo">
             <h3 className="evhead">Event Name</h3>
             <p className='evtxt'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             </p>
            </div>
            </div>
          </div>
          <div className="col-6 m-10">
            <div className="eventbox">  
            <img src={Image1} alt="" />
            <div className="evinfo">
             <h3 className="evhead">Event Name</h3>
             <p className='evtxt'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             </p>
            </div>
            </div>
          </div>



        </div>
        <div className="row">
          
          <div className="col-6 m-10">
            <div className="eventbox">  
            <img src={Image1} alt="" />
            <div className="evinfo">
             <h3 className="evhead">Event Name</h3>
             <p className='evtxt'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             </p>
            </div>
            </div>
          </div>
          <div className="col-6 m-10">
            <div className="eventbox">  
            <img src={Image1} alt="" />
            <div className="evinfo">
             <h3 className="evhead">Event Name</h3>
             <p className='evtxt'>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             </p>
            </div>
            </div>
          </div>



        </div>
      </div>

    </div>
  )
}

export default Events