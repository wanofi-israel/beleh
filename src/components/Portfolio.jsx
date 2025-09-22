import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TeleBirr from "../assets/images/TeleBirr.png"
import Tedla from "../assets/images/Tedla.png"
import CBE from "../assets/images/CBE.png"
import Hibret from "../assets/images/Hibret.png"
import Ovid from "/images/ovid.svg"
import TTK from "/images/ttk.png"
import Allinone from "/images/allinone.png"
import Kestedamena from "/images/kestedemena.png"
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
    gsap.to('.logoWhite',{
            display:'none'
          },0)
          gsap.to('.logoDark',{
            display:'flex'
          },0)
      },
      onEnterBack:()=>{
        gsap.to('.navbar',{
          color:"var(--color-text-blue)"
    })
    gsap.to('.logoWhite',{
            display:'none'
          },0)
          gsap.to('.logoDark',{
            display:'flex'
          },0)
      },
      onLeaveBack:()=>{
        gsap.to('.navbar',{
          color:"var(--color-text)"
    },0)
    gsap.to('.logoWhite',{
            display:'flex'
          },0)
          gsap.to('.logoDark',{
            display:'none'
          },0)
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
                <img src={TeleBirr} alt="CBE-Logo" width="30%"/>
                
            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/Tedla-Ambulance')}>
                                <img src={Tedla} alt="CBE-Logo" width="30%"/>
                                

            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/Hibret Bank')}>
                                <img src={Hibret} alt="Hibret-Logo" width="30%"/>
                                

            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/CBE')}>
                <img src={CBE} alt="CBE-Logo" width="30%"/>
                
            </div>
        </div>
      </div>
      <div className="portfolio-top">
        <div className="portfolio-top_left">
            <h3 className="header">
              Crafting excellence,<br /> one project <br /> at a time.
            </h3>
        </div>
        <div className="portfolio-top_right">
            <div className="projects" onClick={()=>navigate('/portfolio/Ovid Real Estate')}>
                <img src={Ovid} alt="CBE-Logo" width="30%"/>
                
            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/All in One Market')}>
                                <img src={Allinone} alt="CBE-Logo" width="30%"/>
                                

            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/Sky Soap')}>
                                <img src={TTK} alt="Hibret-Logo" width="30%"/>
                                

            </div>
            <div className="projects" onClick={()=>navigate('/portfolio/Kestedemena')}>
                <img src={Kestedamena} alt="CBE-Logo" width="30%"/>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
