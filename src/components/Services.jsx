import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import Mega from '../assets/images/mega.png'
function Services() {
    useGSAP(()=>{
        const splitService=new SplitText('.fade-in_service',{type:'lines'})
        const splitServicedesc=new SplitText('.fade-in_servicebrief',{type:'lines'})
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
      tl.from(splitServicedesc.lines,{
         opacity:0,
            yPercent:100,
            duration:2,
            stagger:.2,
            ease:'expo.out'
      },0)
        

    },[])

  return (
    <div className="services" id="services">
      <div className='amplified'>
        <img src={Mega}/>
      <h3 className='fade-in_service'>
        Your Brand<br/>Voice Amplified
        {/* We envision a transformative <br /> decade ahead */}
      </h3>
      </div>
      <div className="fade-in_servicebrief">
      <p className="services-desc">
        We create immersive sound experiences that connect with your audience. Original jingles, music, and audio branding that resonate with your audience.
      </p>
      </div>
      <h3 className="fade-in_service">
        Services we offer
      </h3>
    </div>
  )
}

export default Services
