import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'


function More() {
            useGSAP(()=>{
        const headerSplit=SplitText.create('.more .content h1',{type:'lines'})
            
        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:".more",
                start:'top center'
            }
        })

        tl.from(headerSplit.lines,{
            yPercent:100,
            opacity:0,
            stagger:.06
        })
        
    },[])
    
  return (
    <div>
    <div className='about-container'>
      <div>
    <div className='more' id='more'>

      <div className="content">
        <h1>
            About the Founder

        </h1>
      </div>
    </div>
    <div className="fade-in brief">
        <h4 className='about-text'>
           Bleh Jingles was founded by Natnael Girmachew, a well-known lyricist and producer with years of proven experience in Ethiopia’s music and creative industry. Natnael has produced multiple hit songs for top artists in the country and is celebrated for his ability to transform ideas into memorable sounds. With his deep knowledge of lyrics, melody, and music production, he brings both artistry and professionalism to every project, making Bleh Jingles a trusted name for brands that want to be heard.
        </h4>
      
        
      </div>
      </div>
      <div ><img className='about-img' src='../../public/images/about.jpg'/></div>
    </div>
<div className='about-thecompany'>
  <div><img className='about-img' src='../../public/images/bleh-s.png'/></div>
   <div>
       <div className='cont-left more' id='more'>

      <div className="content">
        <h1>
            About the Company

        </h1>
      </div>
    </div>
    <div className="fade-in brief">
        <h4 className='about-text'>
          About the Company
Bleh Jingles is a creative audio production company dedicated to creating unique promotional jingles, brand sounds, and advertising music that leave a lasting impact. From lyric writing and melody creation to professional studio recording, mixing, and mastering, we provide end-to-end solutions for businesses and organizations. Our team ensures every sound we deliver is original, catchy, and tailored to strengthen brand identity and audience connection.
<br/>Our services include:<br/>
<ul>
  <li>Lyric Writing</li>
  <li>Melody Creation</li>
  <li>Instrumental & Vocal Studio Recording</li>
  <li>Mixing & Mastering</li>
  <li>One-Stop Jingle Production (idea to final track)</li>

</ul>
        </h4>
      
        
      </div>
     </div>
      </div>
<div className='mission-about'>
   <div>
       <div className='cont-left more' id='more'>

      <div className="content">
        <h1>
          Our Mission

        </h1>
      </div>
    </div>
    <div className="fade-in brief">
        <h4 className='about-text mission-text'>
     
To empower brands through the power of sound by delivering original, high-quality jingles and promotional audio that capture attention, inspire emotion, and drive recognition.
        </h4>
      
        
      </div>
     </div>
     <div>
       <div className='cont-left more' id='more'>

      <div className="content">
        <h1>
          Our Vission

        </h1>
      </div>
    </div>
    <div className="fade-in brief">
        <h4 className='about-text mission-text'>
     
To become Ethiopia’s leading sound branding company, setting new standards in creativity and professionalism while expanding globally as a hub for innovative jingle production and audio marketing solutions.
        </h4>
      
        
      </div>
     </div>
      </div>
    </div>
  )
}

export default More
