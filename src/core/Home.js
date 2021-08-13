import * as React from 'react'
import Ellips2 from '../images/Ellips2.png'
import squiggle from '../images/squiggle.svg'
import flame from '../images/flame.png'
import mobev from '../images/mobev.png'
import mobblg from '../images/mobblg.png'
import Navbar from '../components/Navbar1';
import '../styles/Home.css';
import { Link } from "react-router-dom";
import { Timeline, Tween } from 'react-gsap';
function Home() {
  // 2. Use at the root of your app
  return (
    
      <div className="App">
      <Navbar/>
      <div className="container mobile ">
        <div className="mobilemaintext">
          KIIT's one and only<br/> filmmaking society.<br/>Yes, official. 
          <img src={squiggle} alt ="" className="mobilesquiggl" /> 
        </div>
        <a href="./events">
        <div className="mobileevents">
          
          <div className="mevl">
            <div className="mevhead">
              EVENTS
            </div>
            <div className="mevtxt">
              Check out our upcoming events
            </div>
          </div>
          <div className="mevr">
            <img src={mobev} alt="" />
          </div>
          </div>
          </a>
        <a href="./blogs">
        <div className="mobileblogs">
          <div className="mblgl">
            <div className="mblghead">
              BLOGS
            </div>
            <div className="mblgtxt">
              Read what our writers have to say
            </div>
          </div>
          <div className="mblgr">
            <img src={mobblg} alt="" />
          </div>
        </div>
        </a>
        </div>
      
     
      <i class="fas fa-star mobilehide" style={{'position':'absolute','left':'12vw'}}></i>
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
      <div className="hometxt mobilehide">
        <div className="txt">KIIT's</div> <div className="txt">filmmaking </div><div className="txt">society.</div><div className="txt">Yes, official.</div> 
       <img src={squiggle} alt ="" className="squiggl" /> 
      </div>
     </Tween> 
    
    
  
  <Tween from={{ y: '200px',x:"-200px"}} duration={1}>
  <img src={flame} alt="" className="flame"/>
  </Tween>
    
    <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} duration={2} >
    <Link to="/events" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="mobilehide button-bot">Events</button></Link>
    </Tween>
    </div>

    </div>
  )
}

export default Home
