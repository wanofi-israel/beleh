import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Clients() {

    let scrollTl=gsap.timeline({})
    useGSAP(()=>{
        scrollTl.to('.inner-crousal',{
            xPercent:-100,
            ease:'none',
            duration:45,
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
                <div className="crousal-item">Awash Bank</div>
                <div className="crousal-item">Tele Birr</div>
                <div className="crousal-item">CBE</div>
                <div className="crousal-item">RIDE</div>
                <div className="crousal-item">ELPA</div>
            </div>
            <div className="crousal-items">
                <div className="crousal-item">2Awash Bank</div>
                <div className="crousal-item">Tele Birr</div>
                <div className="crousal-item">CBE</div>
                <div className="crousal-item">RIDE</div>
                <div className="crousal-item">ELPA</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
