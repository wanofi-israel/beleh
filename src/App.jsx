import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
function App() {
    gsap.registerPlugin(SplitText,ScrollTrigger)
  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
    <div className='service-section'>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    </div>
    </div>
  )
}

export default App
