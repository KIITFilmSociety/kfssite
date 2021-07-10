import * as React from 'react'
import Navbar from '../components/Navbar';
import '../styles/works.css'
import Vector from '../images/Vector.png'
import {Link} from 'react-router-dom'

function Works(){
return(
    <div>
    
  <Navbar/>
  <img src={Vector} alt="something " className="vector"/>
 
  <div className='works'>
    <h1>OUR WORK</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
    <div className='work-buttons'>
    <Link to="#" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="button"><i class="fab fa-youtube"/>Short Films</button></Link>
    <Link to="#" style={{color:"black",textDecoration: 'none'}}><button type="button"  className="button"><i class="fab fa-medium"/>Blogs</button></Link>
    
    </div>
    
 </div>

</div>
  )

}

export default Works;

