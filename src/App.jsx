import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {
  const [playState,setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
      <Title subtitle='our program' title='What We Offer'/> 
      <Programs />
      <About setPlayState={setPlayState}/>
      <Title subtitle='GALLERY' title='Campus Photos'/> 
      <Campus />
      <Title subtitle='TESTIMONIAL' title='What Student Say'/> 
      <Testimonials />
      <Title subtitle='CONTACT US' title='Get in Touch with Us'/> 
      <Contact />
      <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App

/* we are passing title as props so that we can use one title components for writing all our titles */

/* we are going to use that same titile element for fiiferent components in ou file , 
 like we used it for programs now we are going to use for campus */

/**To add the Functionality of recieving information from the from to our admin dashbord we will use WEB3 Forms */

/**To add the feature of scroll which mean whenever we click on about from the navbar it takes us to about and same for others we will use react-scroll........and we will add this  feature to the navbar */

/**To make our website responsive we will use media quaries */