import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
function ValuesDetail() {

  const box = useRef()
  const isMobile=useMediaQuery({maxWidth:665})
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
        </div>
      </div>
      <div className="values-right">
        <div className="content" id="content">
          <div className="value-top">
            <h3>Lorem ipsum <br /> dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nihil blanditiis eaque corporis fugit exercitationem debitis rerum
              laborum deserunt molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rerum.
            </p>
            <div className="cta-container">
              <button className="cta-learn-more" style={{ color: "var(--color-accent-blue)", backgroundColor: "rgba(51,112,255,.2)" }}>
                Learn more <div className="icon"><ArrowForwardRoundedIcon sx={{ fill: "var(--color-accent-blue)" }} /></div>
              </button>
            </div>
          </div>
          <div className="value-bottom">
            <h3>Lorem ipsum <br /> dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nihil blanditiis eaque corporis fugit exercitationem debitis rerum
              laborum deserunt molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, reiciendis?
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
import { useMediaQuery } from 'react-responsive';

export default ValuesDetail
