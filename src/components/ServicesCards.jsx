import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ServiceCard from './ServiceCard'
import { useMediaQuery } from 'react-responsive'

function ServicesCards() {
    const isMobile=useMediaQuery({maxWidth:819.5})
    useGSAP(()=>{

        if(!isMobile){
            gsap.to('.servicecard',{
              scrollTrigger:{
                trigger:'.service-section-cards',
                start:'top top',
                end:'bottom -20%',
                scrub:true
              },
              y:-40
            })
        }
    },[])
  return (
    <div className='service-section-cards'>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    </div>
  )
}

export default ServicesCards
