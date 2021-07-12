import * as React from 'react'
import Ellips2 from '../images/Ellips2.png'
import Group28 from '../images/Group28.png'
import flame from '../images/flame.png'
import Navbar from '../components/Navbar';
import '../styles/Home.css';
import { Link } from "react-router-dom";
import { Controls, PlayState,Timeline, Tween } from 'react-gsap';
function Home() {
  // 2. Use at the root of your app
  return (
    
      <div className="App">
      <Navbar/>

  <Timeline
    target={
      <img src={Ellips2} alt="some svg" className="elps"/>
    }
  >
    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={0.5} />
    <Tween from={{ y: '-600px' }} />
    <Tween from={{ rotation: 180 }} position="+=1" />
  </Timeline>
  <Tween from={{ x: '-200px' }} duration={2}>
  <img src={Group28} alt="some svg" className="grp28"/>
  </Tween>
    
    
    
    <div>
    
    
  
  <Tween from={{ y: '200px',x:"-200px"}} duration={1}>
  <img src={flame} alt="something " className="flame"/>
  </Tween>
    
    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} >
    <Link to="/events" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="button-bot">Events</button></Link>
    </Tween>
    </div>

    </div>
  )
}

export default Home
