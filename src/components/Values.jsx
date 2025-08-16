import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

function Values() {
    useGSAP(()=>{
        const headerSplit=SplitText.create('.values-header',{type:'words, lines'})
const tl=gsap.timeline({
            scrollTrigger:{
                trigger:"#values",
                start:'top center'
            }
        })
const contentTl=gsap.timeline({
            scrollTrigger:{
                trigger:"#values",
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
    <div className="values" id="values">
      <h3 className="values-header">Licensed melodies <br /> built to last</h3>
      <div className="container">
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
    </div>
  );
}

export default Values;
