import * as React from 'react'
import Ellips2 from '../images/Ellips2.png'
// import Group28 from '../images/Group28.png'
import squiggle from '../images/squiggle.svg'
import flame from '../images/flame.png'
import Navbar from '../components/Navbar1';
import '../styles/Home.css';
import { Link } from "react-router-dom";
import { Timeline, Tween } from 'react-gsap';
function Home() {
  // 2. Use at the root of your app
  return (
    
      <div className="App">
      <Navbar/>
     
      <i class="fas fa-star" style={{'position':'relative','top':'18px','left':'11em'}}></i>
     <Timeline
    target={
      <img src={Ellips2} alt="some svg" className="elps"/>
    }
  >
    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={0.5} />
    <Tween from={{ y: '-600px' }} />
    <Tween from={{ rotation: 180 }} position="+=1" />
  </Timeline>

    <div className="container cont1">
      <Tween from={{ x: '-200px' }} duration={2}>
      <div className="hometxt">
        <div className="txt">KIIT's</div> <div className="txt">filmmaking </div><div className="txt">society.</div><div className="txt">Yes, official.</div> 
       <img src={squiggle} className="squiggl" /> 
      </div>
     </Tween> 
    
    <i class="fas fa-star" style={{'position':'relative','top':'8em','left':'35em'}}></i>
  
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
