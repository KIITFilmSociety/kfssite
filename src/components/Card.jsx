import React from 'react'
import '../styles/Card.css'
import yt from '../images/yt.png'
import ig from '../images/ig.png'
import li from '../images/li.png'

function Card ({ name, about, job, ytlink, iglink, lilink, image, cover }) {
  return (
    <div className='Card'>
      <div className='upper-container' style={{ backgroundImage: `url(${ cover })` }}>
        <div className='image-container'>
          <img src={image} alt='dp' height='100px' width='100px' />
        </div>
      </div>
      <div className='lower-container'>
        <h3>
          {name}
        </h3>
        <h4>
          {job}
        </h4>
        <p>
          {about}
        </p>
        <a href={ytlink} target='_blank' rel='noreferrer'>
          <img src={yt} alt='yt' className='yt socials' />
        </a>
        <a href={iglink} target='_blank' rel='noreferrer'>
          <img src={ig} alt='ig' className='ig socials' />
        </a>
        <a href={lilink} target='_blank' rel='noreferrer'>
          <img src={li} alt='li' className='li socials' />
        </a>
      </div>
    </div>
  )
}

export default Card;
