import React, { useRef } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function ContactUs() {
  const linkRef=useRef(null)
  return (
    <div className='contactus-section'>
      <div>
        <h1>Learn more about <br />our offerings</h1>
      </div>
      <div>
        <div
          className="link"
          onMouseEnter={() => {
            if (linkRef.current) {
              // Reset animation so it can play again
              linkRef.current.style.animation = 'none';
              // Force reflow to restart animation
              void linkRef.current.offsetWidth;
              linkRef.current.style.animation = 'borderAnimation .5s ease-in-out forwards';
            }
          }}
          onMouseLeave={() => {
            if (linkRef.current) {
              // Reset animation so it can play again
              linkRef.current.style.animation = 'none';
              // Force reflow to restart animation
              void linkRef.current.offsetWidth;
              linkRef.current.style.animation = 'borderAnimation .5s ease-in-out reverse';
            }
          }}
        >
          <div className="after" ref={linkRef}></div>
          <a href="">
            <div className="icon">
              <div className="slide-icons">
                <ArrowForwardIcon sx={{ fontSize: "1em", width: "100%", fill: "green" }} />
                <ArrowForwardIcon sx={{ fontSize: "1em", width: "100%" }} />
              </div>
            </div>
            Get intouch
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs