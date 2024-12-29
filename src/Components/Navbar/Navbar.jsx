import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky,setSticky] = useState(false); //To make the trasition of navbar from transparent to colour
  useEffect(() =>{
    window.addEventListener('scroll' ,() =>{
      window.scrollY > 50 ? setSticky(true):setSticky(false); //To add the transition effect
    });
  },[]); 
  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu =() =>{
    mobileMenu? setMobileMenu(false):setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}> 
      <img src={logo} alt="" className='manin-logo'/>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
//<nav className={`container ${sticky?'dark-nav':''}`}>  added the classname dynamically so to make the transisition

//we are using link tag to do that scroll feature
//the name which we have givern here on the link tags as to={} put those same names as id to the section like for Home to is her so in the hero section give it an id of the name hero 