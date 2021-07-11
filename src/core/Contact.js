import * as React from 'react'
import Navbar from '../components/Navbar';
import '../styles/contact.css'



function Contact(){
return(
    <div>
    
  <Navbar/>
 <div className='contact'><p className='contact-1'>
 <h1>GET IN TOUCH</h1>
 <h6>For any queries, you may get in touch with us :</h6>
 <p>
   <ul style={{'list-style': 'none','padding-left':'0'}}>
     <li><i class="fas fa-envelope" style={{color:'red','margin-right':'3em'}}></i>filmsocietykiit@gmail.com</li>
     <li><i class="fab fa-instagram-square"  style={{color:'red','margin-right':'3em'}}></i>filmsociety_kiit

</li>
   </ul>
 </p>
 <div>
   <p className='disq'>For latest updates, join our Discord Community :</p>
   <pre><i class="fab fa-discord" style={{color:'#4C6EF5'}}/>    <span color={{'color':'white !importent'}}>kfs</span></pre>
 </div>
 </p></div>
 
  <div className='works'>
    
    
  
    
 </div>

</div>
  )

}

export default Contact;

