import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

function ValuesDetail() {

  const box=useRef()
    useGSAP(()=>{
        const contentTl=gsap.timeline({
                scrollTrigger:{
                    trigger:".container",
                    start:'top top',
                    end:'bottom -90%',
                    pin:true,
                    scrub:true
                }
            })
            contentTl.to('.content',{
                yPercent:-50
            }).fromTo('.back-shadow',{
                background:"radial-gradient(circle, rgba(255, 0, 0, 0.603) 0%, rgba(255,0,0,0) 80%)"
            },{
                background:"radial-gradient(circle, rgba(51,112,255,1) 0%, rgba(51,112,255,0) 80%)"
            }).fromTo('.sticky-image',{
                border:"1px solid rgba(255, 0, 0, 0.603)"
            },{
                border:"1px solid rgba(51,112,255,1)"
            })

    },[])

  return (
    <div className="container" id="container">
        <div ref={box} className="values-left">
            <div className="back-shadow">
              b
            </div>
          <div className="sticky-image" onMouseMove={(e)=>{
            e.preventDefault
            let prop=box.current.getBoundingClientRect()
              gsap.to('.back-shadow',{
              top:e.clientY-prop.top,
              left:e.clientX-prop.left,
              delay:.3
            })
            
          }}
          onMouseLeave={()=>{
            gsap.to('.back-shadow',{
              top:"80%",
              left:"50%",
              delay:.5
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
              laborum deserunt molestias.
            </p>

            </div>
            <div className="value-bottom">
            <h3>Lorem ipsum <br /> dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              nihil blanditiis eaque corporis fugit exercitationem debitis rerum
              laborum deserunt molestias.
            </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ValuesDetail
