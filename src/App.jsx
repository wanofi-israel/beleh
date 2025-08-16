import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Services from './components/Services'
import Values from './components/Values'
import ValuesDetail from './components/ValuesDetail'
function App() {
    gsap.registerPlugin(SplitText, ScrollTrigger)
  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Values/>
    <ValuesDetail/>
<ContactUs/>
    <Footer/>
    </div>
  )
}

export default App
