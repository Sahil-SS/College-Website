import React from 'react'
import './Hero.css'
import dark_arror from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className="hero-text">
            <h1>Empowering Futures Innovate, Learn, and Achieve Excellence Together</h1>
            <p>Empowering minds, inspiring futures. Our institution is committed to academic excellence, 
            innovation, and holistic development. 
            Explore our diverse programs, 
            vibrant campus life, and supportive community that nurtures your potential. 
            Join us on the journey to transform dreams into reality.</p>
            <button className="btn">Find more about us <img src={dark_arror} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
