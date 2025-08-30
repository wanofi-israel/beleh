import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Project from '../assets/images/service.jpg'
import React, { useEffect } from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { SplitText } from 'gsap/all';
import portfolio from '../../constants/Portfolio';
import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
function Portfolio() {
  const isMobile=useMediaQuery({maxWidth:664})

  const navigate=useNavigate()
  const {project}=useParams()

  useEffect(()=>{
    window.scroll(0,0)
  },[project])
    useGSAP(()=>{
       
      const splitCoOverview=new SplitText('.company-overview',{type:'lines'})
      const splitProOverview=new SplitText('.project-overview',{type:'lines'})
      
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
        if(isMobile){
          gsap.to('.nav-logo,.navbar-center',{
            color:"var(--color-text-blue)"
          })
          gsap.to('.navbar',{
            color:"var(--color-text)"
          })

          gsap.to('.navbar',{
            scrollTrigger:{
                trigger:'.portfolio-container',
                start:'top top',
                end:'bottom top',
                scrub:true,
                onLeaveBack:()=>{
                gsap.to('.nav-logo,.navbar-center',{color:"var(--color-text-blue)"})
                },
                onEnter:()=>{
                gsap.to('.nav-logo,.navbar-center',{color:"var(--color-text)"})
                }
            }
        })


          }else{
          gsap.to('.navbar',{
            color:"var(--color-text-blue)"
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
        }
        
    },[project])

    
  let currentIndex=portfolio.findIndex(el=>el.company_name===project)

  console.log(currentIndex);
  
  return (
    <div className='portfolio-page'>
      <div className="portfolio-container">
        <div className="portfolio-left" 
          onClick={()=>{
            if(currentIndex-1<0){
              navigate(`/portfolio/${portfolio[portfolio.length-1]?.company_name}`)
            }else{
              navigate(`/portfolio/${portfolio[currentIndex-1]?.company_name}`)
            }
          }}
        ><KeyboardArrowLeftIcon sx={{fontSize:52,transform:"rotate(-45deg)"}}/></div>
        <div className="portfolio-right" 
          onClick={()=>{
            if((currentIndex+1)%portfolio.length===0){
              navigate(`/portfolio/${portfolio[0]?.company_name}`)
            }else{
              navigate(`/portfolio/${portfolio[currentIndex+1]?.company_name}`)
            }
          }}
        ><KeyboardArrowRightIcon sx={{fontSize:52,transform:"rotate(-45deg)"}}/></div>
        <div className="portfolio-container_left">
            <div className="project-image">
            <img src={Project} alt="portfolio-image" width='100%' height='100%' />
            <div className="overlay">
              <img src={portfolio[currentIndex]?.logo} alt={`${portfolio[currentIndex]?.company_name}-Logo`} width="60%"/>
            </div>
            </div>
            
        </div>
        <div className="portfolio-container_right">
            <h3 className="company-name">
                {portfolio[currentIndex]?.company_name}
            </h3>
            <p className="company-overview">
                {portfolio[currentIndex]?.company_overview}
            </p>
            <p className="project-overview">
                {portfolio[currentIndex]?.project_overview}
            </p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
