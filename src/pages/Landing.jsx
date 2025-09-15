import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import ServicesCards from '../components/ServicesCards'
import Values from '../components/Values'
import ValuesDetail from '../components/ValuesDetail'
import Clients from '../components/Clients'
import Portfolio from '../components/Portfolio'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Landing() {

  useGSAP(()=>{
gsap.to('.logoWhite',{
            display:'flex'
          },0)
          gsap.to('.logoDark',{
            display:'none'
          })
  },[])

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  return (
    <div className='whole-wrrapper'>
      <Hero />
      <Services />
      <ServicesCards/>
      <Values />
      <ValuesDetail />
      {/* <Clients /> */}
      <Portfolio />
    </div>
  )
}

export default Landing
