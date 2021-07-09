import * as React from "react"
import Card from '../components/Card'
import Image1 from '../images/kauc.jpg'
import Image2 from '../images/debu.jpg'
import Navbar from "../components/Navbar"


function About() {
  // 2. Use at the root of your app
  return (
    <div>
    <Navbar/>
    <div className='row about'>
    <Card
      name={'Kaustav Mukhopadhyay'}
      job={'Graphic Design Team'}
      about={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
      ytlink={'https://www.youtube.com/channel/UCMCA0JMQgrstjgFGWTeT_CQ'}
      iglink={'https://www.instagram.com/its_thekaustav/'}
      lilink={'https://www.linkedin.com/in/kaustavmukhopadhyay/'}
      image={Image1}
      cover={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv_g71-Tc4p2dSJAmIgRonBiOPjz_ybCMQiyBQy4cCQ6nSl7e8DQ3CBjJW8ynTDVeZw&usqp=CAU'
              }
      className='Card col-4'
          />
    <Card
      name={'Debangshu Bhattacharjee'}
      job={'Sound Team'}
      about={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
      ytlink={'https://www.youtube.com/channel/UCMCA0JMQgrstjgFGWTeT_CQ'}
      iglink={'https://www.instagram.com/its_thekaustav/'}
      lilink={'https://www.linkedin.com/in/kaustavmukhopadhyay/'}
      image={Image2}
      cover={'https://img.artpal.com/994621/175-20-6-20-3-42-2m.jpg'}
      className='Card col-4'
          />
  </div>
  </div>
    )
}



export default About;
