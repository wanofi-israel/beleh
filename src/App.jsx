import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Footer from './components/Footer'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Services from './components/Services'
function App() {
    gsap.registerPlugin(SplitText, ScrollTrigger)
  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
<<<<<<< HEAD
    <Services/>
    
=======
    <div className='service-section-cards'>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    </div>

    <Footer/>
>>>>>>> 0c49fde873048a1ae501627db6ea5bb299efc437
    </div>
  )
}

export default App
