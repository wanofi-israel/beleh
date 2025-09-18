import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
import Founder from "../assets/images/about.jpg"
import Logo from "../assets/images/blehLogo.png"

function More() {
            useGSAP(()=>{
        const headerSplit=SplitText.create('.more .content .content-left p',{type:'lines'})
            
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:".more",
                start:'top center'
            }
        })

        tl.from('.content .content-left h1',{
          yPercent:100,
            opacity:0,
        })
        tl.from(headerSplit.lines,{
          yPercent:100,
          opacity:0,
          stagger:.06
        })
        tl.from('.content .content-right img',{
          yPercent:100,
            opacity:0,
        },1)
        
    },[])
    
  return (
    <div className='more' id="more">
      <div className="content">
        <div className="content-left">
          <h1>About the Founder</h1>
          <p>
            Bleh Jingles was founded by Natnael Girmachew, a well-known lyricist and producer with years of proven experience in Ethiopia’s music and creative industry. Natnael has produced multiple hit songs for top artists in the country and is celebrated for his ability to transform ideas into memorable sounds. With his deep knowledge of lyrics, melody, and music production, he brings both artistry and professionalism to every project, making Bleh Jingles a trusted name for brands that want to be heard.
          </p>
        </div>
        <div className="content-right">
          <img src={Founder} alt="founder" width="100%"/>
        </div>
      </div>

      <div className="content">
        <div className="content-right">
          <img src={Logo} alt="logo" width="100%"/>
        </div>
        <div className="content-left">
          <h1>About Our Company</h1>
          <p>
            Bleh Jingles is a creative audio production company dedicated to creating unique promotional jingles, brand sounds, and advertising music that leave a lasting impact. From lyric writing and melody creation to professional studio recording, mixing, and mastering, we provide end-to-end solutions for businesses and organizations. Our team ensures every sound we deliver is original, catchy, and tailored to strengthen brand identity and audience connection.

          </p>
        </div>
      </div>

      <div className="content">
        <div className="content-left">
          <h1>Our Mission</h1>
          <p>
            To empower brands through the power of sound by delivering original, high-quality jingles and promotional audio that capture attention, inspire emotion, and drive recognition.
          </p>
        </div>
        <div className="content-left">
          <h1>Our Vision</h1>
          <p>
            To become Ethiopia’s leading sound branding company, setting new standards in creativity and professionalism while expanding globally as a hub for innovative jingle production and audio marketing solutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default More
