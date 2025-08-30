import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TeleBirr from "../assets/images/TeleBirr.png"
import Tedla from "../assets/images/Tedla.png"
import CBE from "../assets/images/CBE.png"
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Portfolio() {

  const navigate=useNavigate()
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
            <div className="projects" onClick={()=>navigate('/portfolio/Tele-Birr')}>
                <img src={TeleBirr} alt="CBE-Logo" width="40%"/>
            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/Tedla-Ambulance')}>
                                <img src={Tedla} alt="CBE-Logo" width="40%"/>

            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/Zekuria')}>
                <h2>Zekuria</h2>
            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/CBE')}>
                <img src={CBE} alt="CBE-Logo" width="40%"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
