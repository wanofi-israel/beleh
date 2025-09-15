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
        
    },[])
  return (
    <div className="values" id="values">
      <h3 className="values-header">Our Value</h3>
    </div>
  );
}

export default Values;
