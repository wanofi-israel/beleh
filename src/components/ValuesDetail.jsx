import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function ValuesDetail() {

    useGSAP(()=>{
        const contentTl=gsap.timeline({
                scrollTrigger:{
                    trigger:".container",
                    start:'top top',
                    end:'bottom -80%',
                    pin:true,
                    scrub:true
                }
            })
            contentTl.to('.content',{
                yPercent:-50
            }).to('.sticky-image',{
                boxShadow:'0 0 400px -5px red'
            })

    },[])

  return (
    <div className="container" id="container">
        <div className="values-left">
          <div className="sticky-image"></div>
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
