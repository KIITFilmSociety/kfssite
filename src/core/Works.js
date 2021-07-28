import * as React from 'react'
import Navbar from '../components/Navbar1';
import Wave from 'react-wavify'
import '../styles/works.css'
import {Link} from 'react-router-dom'

function Works(){
return(
    <div>
    
  <Navbar/>
  <div className='works'>
    <h1>OUR WORK</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    <div className='work-buttons'>
    <Link to="#" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="button"><i class="fab fa-youtube"/>Short Films</button></Link>
    <Link to="#" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="button"><i class="fab fa-medium"/>Blogs</button></Link>
    
    </div>
    
 </div>
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
  )

}

export default Works;

