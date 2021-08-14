import React from 'react'
import '../styles/Card.css'

function Card ({ name, about, job, ytlink, iglink, lilink, image, cover }) {
  return (
    <div className='Card'>
      {/* <div
        className='upper-container'
        style={{ backgroundImage: `url(${cover})` }}
			>
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
        <div className='socials'>
          <a href={ytlink} target='_blank' rel='noreferrer'>
            <i class='fab fa-youtube yt' />
          </a>
          <a href={iglink} target='_blank' rel='noreferrer'>
            <i class='fab fa-instagram ig' />
          </a>
          <a href={lilink} target='_blank' rel='noreferrer'>
            <i class='fab fa-linkedin-in li' />
          </a>
        </div>
      </div> */}
      <div className="leftbox">
        <div className='image-container'>
          <img src={image} alt='dp' height='100px' width='100px' />
        </div>
      </div>
      <div className="rightbox">
      <div className="cardname">
          {name}
        </div>
        <div className="cardjob">
          {job}
        </div>
        <div className='socials'>
          <a href={ytlink} target='_blank' rel='noreferrer'>
            <i class='fab fa-youtube yt' />
          </a>
          <a href={iglink} target='_blank' rel='noreferrer'>
            <i class='fab fa-instagram ig' />
          </a>
          <a href={lilink} target='_blank' rel='noreferrer'>
            <i class='fab fa-linkedin-in li' />
          </a>
        </div>
      </div>  
    </div>
  )
}

export default Card
