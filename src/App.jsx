import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { SplitText,ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
function App() {
    gsap.registerPlugin(SplitText,ScrollTrigger)
  return (
    <div className='app'>
    <Navbar/>
    <Hero/>
    </div>
  )
}

export default App
