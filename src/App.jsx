import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subtitle='our program' title='What We Offer'/> 
      <Programs />
      <About />
      <Title subtitle='GALLERY' title='Campus Photos'/> 
      <Campus />
      <Title subtitle='TESTIMONIAL' title='What Student Say'/> 
      <Testimonials />
      <Title subtitle='CONTACT US' title='Get in Touch with Us'/> 
      </div>
    </div>
  )
}

export default App

/* we are passing title as props so that we can use one title components for writing all our titles */
/* we are going to use that same titile element for fiiferent components in ou file , 
 like we used it for programs now we are going to use for campus */
