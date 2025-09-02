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
                scrub:1.5
              },
              y:0
            })
        }
    },[])
  return (
    <div className='service-section-cards'>
    <ServiceCard
    text="Jingle & Music Production"
    />
    <ServiceCard
    text="Promotional Vocal Recording"
    />
    <ServiceCard
    text="Voice Artist Facilitation"
    />
    <ServiceCard
    text="Music Production Supervision & More"
    />
    </div>
  )
}

export default ServicesCards
