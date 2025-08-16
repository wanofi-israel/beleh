import React from 'react'
import ServiceCard from './ServiceCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

function Services() {
    useGSAP(()=>{
        const splitService=new SplitText('.fade-in_service',{type:'lines'})
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#services",
                start:'top center'
            }
        })
       tl.from(splitService.lines,{
            opacity:0,
            yPercent:100,
            duration:2,
            stagger:.2,
            ease:'expo.out'
        })
    },[])

  return (
    <div className="services" id="services">
      <h3 className='fade-in_service'>
        We envision a <br /> transformative <br /> decade ahead
      </h3>
    <div className='service-section-cards'>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    </div>
    </div>
  )
}

export default Services
