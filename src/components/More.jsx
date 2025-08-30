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
    <div className='more'>
      <div className="content">
        <h1>
             Founded by renowned lyricist and producer 
Natnael Girmachew, we specialize in transforming brand messages into catchy melodies and 
powerful soundtracks.
        </h1>
      </div>
    </div>
  )
}

export default More
