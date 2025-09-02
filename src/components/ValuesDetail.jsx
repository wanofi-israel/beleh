import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { useMediaQuery } from 'react-responsive';
import Logo from "../assets/images/blehLogo.png"

function ValuesDetail() {

  const box = useRef()
  const isMobile=useMediaQuery({maxWidth:664})
  useGSAP(() => {
  if(!isMobile){
    const contentTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top top",
      end: "bottom -100%",
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
    }
  });
  
  contentTl
    .to(".content", {
      yPercent: -50
    }, 0)
    .fromTo(".back-shadow", {
      background: "radial-gradient(circle, rgba(51,112,255,1) 0%, rgba(51,112,255,0) 80%)"
    }, {
      background: "radial-gradient(circle, #fd982a 0%, rgba(255,0,0,0) 80%)"
    }, 0)
    .fromTo(".sticky-image", {
      border: "1px solid rgba(51,112,255,1)"
    }, {
      border: "1px solid #fd982a",
      ease: "none"
    }, 0).fromTo(".sticky-image img", {
      filter:"drop-shadow(15px 5px 30px rgba(51,112,255,1))",
    }, {
      filter:"drop-shadow(-15px -5px 30px #fd982a)",
      ease: "none"
    }, 0);
}
}, []);
  return (
    <div className="container" id="container">
      <div ref={box} className="values-left">
        <div className="back-shadow">
          b
        </div>
        <div className="sticky-image" onMouseMove={(e) => {
          e.preventDefault
          let prop = box.current.getBoundingClientRect()
          gsap.to('.back-shadow', {
            top: e.clientY - prop.top,
            left: e.clientX - prop.left,
            delay: .3
          })

        }}
          onMouseLeave={() => {
            gsap.to('.back-shadow', {
              top: "80%",
              left: "50%",
              delay: .5
            })
          }}
        >
          <img src={Logo} alt="bleh-logo"/>
        </div>
      </div>
      <div className="values-right">
        <div className="content" id="content">
          <div className="value-top">
            <h3>Creativity with Purpose</h3>
            <p>
               Every note we compose has intention. We believe in 
innovation that serves your story. By blending imaginative artistry with strategic 
thinking, we ensure our jingles and sound productions amplify your message and inspire 
your audience.
            </p>
            <div className="cta-container">
              <button className="cta-learn-more" style={{ color: "var(--color-accent-blue)", backgroundColor: "rgba(51,112,255,.2)" }}>
                Learn more <div className="icon"><ArrowForwardRoundedIcon sx={{ fill: "var(--color-accent-blue)" }} /></div>
              </button>
            </div>
          </div>
          <div className="value-bottom">
            <h3>Reliability in Delivery</h3>
            <p>
               You can count on Bleh Jingles. From first concept to final cut, 
we pride ourselves on professional, timely delivery. We meet deadlines, stick to budgets, 
and maintain open communication, so you can trust that your project is in good hands 
every step of the way.

            </p>
            <div className="cta-container">
              <button className="cta-learn-more" style={{ color: "#fd982a", backgroundColor: "#fd972a7c" }}>
                Learn more <div className="icon"><ArrowForwardRoundedIcon sx={{ fill: "#fd982a" }} /></div>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValuesDetail
