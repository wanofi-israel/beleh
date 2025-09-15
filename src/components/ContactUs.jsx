import React, { useRef } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { HashLink as Link } from 'react-router-hash-link';
function ContactUs() {
  const linkRef=useRef(null)
  const hoverTl=gsap.timeline({
    duration:.5
  })

  useGSAP(()=>{
    hoverTl.to('.after-after',{
                xPercent:140
              }).to('.after-after',{
                scaleX:.3
              }).to('.after-after',{
                xPercent:200
              })
  },[])

  return (
    <div className='contactus-section'>
      <div>
        <h1>Learn more</h1>
      </div>
      <div>
        <div
          className="link"
          onMouseEnter={() => {
            hoverTl.restart()
          }}
          onMouseLeave={() => {
            hoverTl.restart()
          }}
        >
          <Link to='#contact_us'>
          <div className="after" ref={linkRef}>
            <div className="after-after"></div>
          </div>
            <div className="icon">
              <div className="slide-icons">
                <ArrowForwardIcon sx={{ fontSize: "4.3rem", width: "100%"}} />
                <ArrowForwardIcon sx={{ fontSize: "4.3rem", width: "100%" }} />
              </div>
            </div>
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ContactUs