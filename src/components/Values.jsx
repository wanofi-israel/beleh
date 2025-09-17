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

        tl.from(headerSplit.lines,{
            yPercent:100,
            opacity:0,
            stagger:.06
        })
        
        gsap.to('.navbar',{
          scrollTrigger:{
            trigger:'.values',
            start:"top top",
            end:"bottom top",
            onEnter:()=>{
              gsap.to('.navbar',{
              color:'var(--color-text)'
    })
    gsap.to('.logoWhite',{
      display:"flex",
    },0)
    gsap.to('.logoDark',{
      display:"none",
    },0)
            },
            onLeaveBack:()=>{
              gsap.to('.navbar',{
              color:'var(--color-text-blue)'
    })
    gsap.to('.logoWhite',{
      display:"none",
    },0)
    gsap.to('.logoDark',{
      display:"flex",
    },0)
            }
          }
        })
    },[])
  return (
    <div className="values" id="values">
      <h3 className="values-header">Our Value</h3>
    </div>
  );
}

export default Values;
