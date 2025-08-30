import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
function Hero() {

    useGSAP(()=>{
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
        gsap.from('.cta-discover',{
            opacity:0,
            yPercent:100,
            ease:'power1.inOut',
            delay:1.5
        })
    },[])
  return (
    <div className='hero'>
        <div className="content">
            <div className="fade-in slogan">
        <h1>
           Your  <br />Brand Voice,<br /> Amplified.
        </h1>
      </div>
      <div className="fade-in brief">
        <p>
            We create immersive sound experiences that connect with your audience. 
            Original jingles, music, and audio branding that resonate with your audience.
        </p>
        <div className="cta-discover">
            Discover more <ArrowDownwardIcon sx={{fontSize:"36px"}}/>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Hero
