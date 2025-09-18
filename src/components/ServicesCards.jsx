import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ServiceCard from './ServiceCard'
import { useMediaQuery } from 'react-responsive'

function ServicesCards() {
    const isMobile=useMediaQuery({maxWidth:819.5})
    const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#services",
                start:'top center'
            }
        })
    useGSAP(()=>{

        if(!isMobile){
            gsap.to('.servicecard',{
              scrollTrigger:{
                trigger:'.service-section-cards',
                start:'top top',
                end:'bottom top',
                scrub:1.5,
              },
              y:0
            })

            tl.from('.servicecard',{
              opacity:0,
              y:100,
              stagger:.06,
              duration:2
            })
        }
    },[])
  return (
    <div className='service-section-cards'>
    <ServiceCard
    text="Lyric and Melody Creation"
    brief="Crafting original lyrics and melodies that bring your brand's message to life."
    />
    <ServiceCard
    text="Composition"
    brief="Creating unique musical compositions tailored to your brand and vision"
    />
    <ServiceCard
    text="Instrumental and Vocal Studio Recording"
    brief="High-quality instrumental and vocal recordings to give your sound a professional edge."
    />
    <ServiceCard
    text="Mixing and Mastering"
    brief="Polishing your tracks with clarity, balance, and professional sound."
    />
    <ServiceCard
    text="One stop Jingle Production"
    brief="Complete jingle production from concept to final track."
    />
    </div>
  )
}

export default ServicesCards
