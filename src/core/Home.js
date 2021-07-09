import * as React from "react"
import Ellips2 from '../images/Ellips2.png'
import Group28 from '../images/Group28.png'
import flame from '../images/flame.png'
import Navbar from '../components/Navbar';
import '../styles/Home.css';


function Home() {
  // 2. Use at the root of your app
  return (
    
      <div className="App">
      <Navbar/>
    <img src={Ellips2} alt="some svg" className="elps"/>
    <img src={Group28} alt="some svg" className="grp28"/>
    <div><img src={flame} alt="something " className="flame"/>
    <button type="button" className="button-bot">Events</button>
    </div>
    </div>
    )
}



export default Home;