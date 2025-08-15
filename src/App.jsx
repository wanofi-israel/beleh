import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Services from './components/Services'
function App() {
    gsap.registerPlugin(SplitText, ScrollTrigger)
  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
    <Services/>
    
    </div>
  )
}

export default App
