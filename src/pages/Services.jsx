import React, { useRef } from 'react'
import serviceBg from "../assets/images/service.jpg"
import { useGSAP } from '@gsap/react'
function Services() {

    const listRef=useRef(null)
    useGSAP(()=>{

        console.log(listRef.current.children);
        
        Array.from(listRef.current?.children || []).forEach((element) => {
            element.children[2].style.visibility="hidden"
                element.addEventListener("mouseenter",()=>{
            element.children[2].style.visibility="visible"
                    
                })
});
    },[])
  return (
    <div className='services-page'>
      <div className="services-list" ref={listRef}>
        <div className="service-rw">
            <h4 className='service-name'>
                Lyric Creation
            </h4>
            <p className="service-brief">
                We craft lyrics that go beyond words designed to express your brand's story, values, and message in a way that connects emotionally with your audience.
                 Every line is written to be memorale, catchy and impactful, ensuring your brand voice is heard loud and clear.
            </p>
            <div className="service-img">
                <img src={serviceBg} alt="bg-img" />
            </div>
        </div>
       
       
        <div className="service-rw">
            <h4 className='service-name'>
                Lyric Creation
            </h4>
            <p className="service-brief">
                We craft lyrics that go beyond words designed to express your brand's story, values, and message in a way that connects emotionally with your audience.
                 Every line is written to be memorale, catchy and impactful, ensuring your brand voice is heard loud and clear.
            </p>
            <div className="service-img">
                <img src={serviceBg} alt="bg-img" />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Services
