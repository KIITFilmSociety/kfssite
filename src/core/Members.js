import * as React from 'react'
import Navbar from '../components/Navbar.js'
import Card from '../components/Card.jsx'
import Image1 from '../images/kauc.jpg'
import Image2 from '../images/debu.jpg'
import '../styles/members.css'

function Members () {
  return (
    <div className='App'>
      <Navbar />
      <div className='memcontainer'>
        <Card
          name={'Kaustav Mukhopadhyay'}
          job={'Graphic Design Team'}
          about={
						'Lorem ipsum dolor sit amet'
					}
          ytlink={'https://www.youtube.com/channel/UCMCA0JMQgrstjgFGWTeT_CQ'}
          iglink={'https://www.instagram.com/its_thekaustav/'}
          lilink={'https://www.linkedin.com/in/kaustavmukhopadhyay/'}
          image={Image1}
          cover={
						'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv_g71-Tc4p2dSJAmIgRonBiOPjz_ybCMQiyBQy4cCQ6nSl7e8DQ3CBjJW8ynTDVeZw&usqp=CAU'
					}
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
				/>
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
				/>
      </div>
    </div>
  )
}

export default Members
