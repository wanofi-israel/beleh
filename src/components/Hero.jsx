import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useNavigate } from 'react-router-dom';
function Hero() {

    const navigate=useNavigate()

    useGSAP(()=>{
            window.addEventListener('load',()=>{
            const splitSlogan=new SplitText('.slogan h1',{type:'lines,words'})
            const splitBrief=new SplitText('.brief p',{type:'lines'})
    
            gsap.from(splitSlogan.lines,{
                opacity:0,
                yPercent:100,
                ease:'power1.inOut',
                stagger:.06,
                duration:1
            })
            gsap.from(splitSlogan.words,{
                opacity:0,
                yPercent:100,
                ease:'power1.inOut',
                stagger:.08,
                duration:1
            })
            gsap.from(splitBrief.lines,{
                opacity:0,
                yPercent:100,
                ease:'power1.inOut',
                stagger:.06,
                duration:1,
                delay:1
            })

            
            gsap.fromTo('.cta-discover',{
                opacity:0,
                yPercent:100
            },{
               opacity:1,
                yPercent:0,
                ease:'power1.inOut',
                delay:1.5
            })

            gsap.to('.navbar',{
      color:'var(--color-text-blue)'
    })
    gsap.to('.logoWhite',{
      display:"none",
    },0)
    gsap.to('.logoDark',{
      display:"flex",
    },0)
        })
        },[])
  return (
   <div className='hero-container'> 
    <div className='hero'>
        <div className="content">
            <div className="fade-in slogan">
        <h1>
           ዘመኑ <br /> የብልሆች ነው
        </h1>
      </div>
      <div className="fade-in brief">
        <p>
            This is the time for those willing to promote, but it's truly the moment for those smart enough to promote their brand
            with vision and creativity. Bleh stands ready to craft the best sound and deliver powerful promotions that makes your brand unforgettable. 
        </p>
        <div className="cta-discover" onClick={()=>navigate('/about')}>
            Discover more <ArrowDownwardIcon sx={{fontSize:"36px"}}/>
        </div>
      </div>
        </div>
    </div>
    <img className='hero-image' src='../../public/images/bleh crop.png'/>
    </div>
  )
}

export default Hero
