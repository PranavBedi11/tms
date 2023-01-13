import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function Nav(){
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50){
      setnav(true);
    }
    else{
      setnav(false)
    }
  }
  window.addEventListener("scroll", changeBackground)
  return (
     <nav className={nav ? 'nav active' : 'nav'}>
      <div className="name"><Link className='Link1' to={"/"}>The Mentorship<span> Spot</span></Link></div>
      <input type="checkbox" className='menu-btn' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link className='Link' to={"/"}>Home</Link></li>
        <li><Link className='Link' to={"/logine"}>About Us</Link></li>
        <li><Link className='Link' to={"/blog"}>Blog</Link></li>
        <li><Link className='Link' to={"/signupe"}>Contact Us</Link></li>
       
      </ul>

     </nav>
  )
}

export default Nav