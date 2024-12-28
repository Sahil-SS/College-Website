import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky,setSticky] = useState(false); //To make the trasition of navbar from transparent to colour
  useEffect(() =>{
    window.addEventListener('scroll' ,() =>{
      window.scrollY > 50 ? setSticky(true):setSticky(false); //To add the transition effect
    });
  },[]); 
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}> 
      <img src={logo} alt="" className='manin-logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About US</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
//<nav className={`container ${sticky?'dark-nav':''}`}>  added the classname dynamically so to make the transisition