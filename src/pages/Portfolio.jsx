import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Project from '../assets/images/service.jpg'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { SplitText } from 'gsap/all';
import portfolio from '../../constants/Portfolio';
function Portfolio() {

    useGSAP(()=>{
       
      const splitCoOverview=new SplitText('.company-overview',{type:'lines'})
      const splitProOverview=new SplitText('.project-overview',{type:'lines'})
        gsap.to('.navbar',{
          color:"var(--color-text-blue)"
        })

        gsap.from('.project-image,.company-name',{
          yPercent:100,
          opacity:0,
          duration:.5,
          ease:'none'
        })
        gsap.from(splitCoOverview.lines,{
          yPercent:100,
          opacity:0,
          stagger:.08,
          duration:.5,
          ease:'none'
        })
        gsap.from(splitProOverview.lines,{
          yPercent:100,
          opacity:0,
          stagger:.08,
          duration:.5,
          ease:'none'
        })
        gsap.to('.navbar',{
            scrollTrigger:{
                trigger:'.portfolio-container',
                start:'top top',
                end:'bottom top',
                scrub:true,
                onLeaveBack:()=>{
                gsap.to('.navbar',{color:"var(--color-text-blue)"})
                },
                onEnter:()=>{
                gsap.to('.navbar',{color:"var(--color-text)"})
                }
            }
        })
    },[])

    
  let list=portfolio.map(el=>console.log(el)
  )
  return (
    <div className='portfolio-page'>
      <div className="portfolio-container">
        <div className="portfolio-left"><KeyboardArrowLeftIcon sx={{fontSize:52,transform:"rotate(-45deg)"}}/></div>
        <div className="portfolio-right"><KeyboardArrowRightIcon sx={{fontSize:52,transform:"rotate(-45deg)"}}/></div>
        <div className="portfolio-container_left">
            <div className="project-image">
            <img src={Project} alt="portfolio-image" width='100%' height='100%' />
            <div className="overlay">
                <h2>ShapesXR</h2>
            </div>
            </div>
            
        </div>
        <div className="portfolio-container_right">
            <h3 className="company-name">
                ShapesXR
            </h3>
            <p className="company-overview">
                Design and Colaboration Platform for 3D and Immersive Content
            </p>
            <p className="project-overview">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto atque deserunt esse, quam incidunt nesciunt sint reiciendis illum aperiam libero alias dicta corrupti debitis adipisci molestiae dolor ipsum error enim id excepturi in eaque aliquam. A quo facere delectus id quibusdam in impedit molestias? Aut?
            </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
