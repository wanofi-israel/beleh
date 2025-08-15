import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Footer from './components/Footer'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
function App() {
    gsap.registerPlugin(SplitText,ScrollTrigger)
  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
    <div className='service-section-cards'>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    </div>

    <Footer/>
    </div>
  )
}

export default App
