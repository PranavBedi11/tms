import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


const Hero = ()  => {
  
 

  
  return(
   
    <section class="home container3">
      <div className="home-text">
        <h1> Find A <br /> Mentor </h1>
      
        <Link className='link' to={"/contact"}>Contact Us</Link>
      </div>
    </section>
  )}


export default Hero