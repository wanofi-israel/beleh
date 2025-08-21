import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Portfolio() {
  useGSAP(()=>{
    gsap.to('.portfolio',{
      scrollTrigger:{
        trigger:'.portfolio',
      start:'top top',
      end:'bottom top',
      scrub:true,
      onEnter:()=>{
        gsap.to('.navbar',{
          color:"var(--color-text-blue)"
    })
      },
      onEnterBack:()=>{
        gsap.to('.navbar',{
          color:"var(--color-text-blue)"
    })
      },
      onLeave:()=>{
        gsap.to('.navbar',{
          color:"var(--color-text)"
    })
      },
      onLeaveBack:()=>{
        gsap.to('.navbar',{
          color:"var(--color-text)"
    })
      }
    }
  })
    
  },[])
  return (
    <div className='portfolio'>
      <div className="portfolio-top">
        <div className="portfolio-top_left">
            <h3 className="header">
              Our <br /> portfolio
            </h3>
        </div>
        <div className="portfolio-top_right">
            <div className="projects">
                <h2>TELE BIRR</h2>
            </div>
            <div className="projects">
                <h2>TELE BIRR</h2>
            </div>
            <div className="projects">
                <h2>TELE BIRR</h2>
            </div>
            <div className="projects">
                <h2>TELE BIRR</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
