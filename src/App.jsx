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
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import { useGSAP } from '@gsap/react'
function App() {
    gsap.registerPlugin(SplitText, ScrollTrigger)

    useGSAP(()=>{
      ScrollTrigger.create({
  trigger: "body", // Or any specific element you want to monitor
  start: "top top",
  onUpdate: self => {
    if (self.direction === 1) {
      console.log("Scrolling down");

      gsap.to('.navbar',{
        top:-100,
        opacity:0,
        ease:'power1.inOut'
      })
      // Add a class, trigger an animation, etc.
    } else {
      console.log("Scrolling up");
      // Remove a class, reverse an animation, etc.
      gsap.to('.navbar',{
        top:0,
        opacity:1,
        ease:'power1.inOut'
      })
    }
  }
});
    },[])
  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Values/>
    <ValuesDetail/>
    <Clients/>
    <Portfolio/>
<ContactUs/>
    <Footer/>
    </div>
  )
}

export default App
