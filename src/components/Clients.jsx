import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import CBE from "../assets/images/CBE.png"
import TeleBirr from "../assets/images/TeleBirr.png"
import Tedla from "../assets/images/tedla.png"
import React from 'react'

function Clients() {

    let scrollTl=gsap.timeline({})
    useGSAP(()=>{
        scrollTl.to('.inner-crousal',{
            xPercent:-100,
            ease:'none',
            duration:15,
            repeat:-1
        })
    },[])
  return (
    <div className='clients'>
        <h3 className="title">
            Our Trusted Partners
        </h3>
      <div className="outer-crousal">
        <div className="inner-crousal" onMouseEnter={()=>{
            scrollTl.pause()
        }} onMouseLeave={()=>{
            scrollTl.resume()
        }}>
            <div className="crousal-items">
                <div className="crousal-item"><img src={CBE} alt="CBE-Logo" width="60%"/></div>
                <div className="crousal-item"><img src={TeleBirr} alt="CBE-Logo" width="60%"/></div>
                <div className="crousal-item"><img src={Tedla} alt="CBE-Logo" width="60%"/></div>

                <div className="crousal-item">RIDE</div>
            </div>
            <div className="crousal-items">
                <div className="crousal-item"><img src={CBE} alt="CBE-Logo" width="60%" height="60%"/></div>
                <div className="crousal-item"><img src={TeleBirr} alt="CBE-Logo" width="60%" height="60%"/></div>
                <div className="crousal-item"><img src={Tedla} alt="CBE-Logo" width="60%"/></div>

                <div className="crousal-item">RIDE</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
