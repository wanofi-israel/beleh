import React, { useRef } from 'react'
import Lyric from "../assets/images/lyrics.jpeg"
import Melody from "../assets/images/melody.jpeg"
import Instrumental from "../assets/images/instrumental.jpeg"
import Recording from "../assets/images/recording.jpeg"
import Mixing from "../assets/images/mixing.jpeg"
import Mastering from "../assets/images/mastering.jpeg"
import { useGSAP } from '@gsap/react'
import ServicesItems from '../components/ServicesItems'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
function Services() {

    const isMobile=useMediaQuery({maxWidth:590})
    const listRef=useRef(null)
    useGSAP(()=>{

        const splitSlogan=new SplitText('.slogan h1',{type:'lines,words'})
            const splitBrief=new SplitText('.brief p',{type:'lines'})
    
            gsap.from(splitSlogan.lines,{
                opacity:0,
                yPercent:100,
                ease:'power1.inOut',
                stagger:.06,
                duration:1
            })
            gsap.from(splitSlogan.words,{
                opacity:0,
                yPercent:100,
                ease:'power1.inOut',
                stagger:.08,
                duration:1
            })
            gsap.from(splitBrief.lines,{
                opacity:0,
                yPercent:100,
                ease:'power1.inOut',
                stagger:.06,
                duration:1,
                delay:1
            })

        if(!isMobile){
            Array.from(listRef.current?.children || []).forEach((element) => {
                element.addEventListener("mouseenter",()=>{
                    Array.from(listRef.current?.children || []).forEach((el) => {
                            el.classList.remove("hover")
                            el.children[2].classList.remove("visible")
                        })
                            element.children[2].classList.add("visible")
                            element.classList.add("hover")
                       
                    })
    });
        }
    },[])
  return (
    <div className='services-page'>
        <div className="content">
            <div className="fade-in slogan">
        <h1>
           Creative Jingle <br /> Production Services
        </h1>
      </div>
      <div className="fade-in brief">
        <p>
            We transform your brand message into music that resonates. From concept to final broadcast, our team delivers professional jingles that inspire, engage, and leave a lasting impression.
        </p>
        </div>
        </div>
      <div className="services-list" ref={listRef}>
        <ServicesItems
            name="Lyric Creation"
            brief="We craft lyrics that go beyond words designed to express your brand's story, values, and message in a way that connects emotionally with your audience.
                 Every line is written to be memorale, catchy and impactful, ensuring your brand voice is heard loud and clear."
            Bg={Lyric}
        />
        <ServicesItems
            name="Melody Creation"
            brief="Melodies are the heart of every jingle. Our team creates original, ear-catching tunes that stick in people’s minds. Whether playful, inspiring, or powerful, each melody is tailored to capture the mood and personality of your brand while leaving a lasting impression."
            Bg={Melody}
        />
        <ServicesItems
            name="Instrumental Studio Recording"
            brief="Using high-quality studio equipment and professional musicians, we produce crisp and powerful instrumental tracks. From live instruments to digital arrangements, we ensure every beat and sound supports your brand’s message with precision and quality."
            Bg={Instrumental}
        />
        <ServicesItems
            name="Vocal Studio Recording"
            brief="A strong vocal performance brings lyrics and melodies to life. We provide professional vocal recording sessions, ensuring every word is delivered with clarity, emotion, and the right tone for your brand. Our trained engineers capture voices that cut through and resonate with listeners."
            Bg={Recording}
        />
        <ServicesItems
            name="Mixing"
            brief="Mixing is where all the recorded elements — vocals, instruments, and effects — are blended together. We balance sound levels, adjust tones, and create depth so every part of the track works in harmony. The result: a clean, powerful, and engaging jingle that feels complete."
            Bg={Mixing}
        />
        <ServicesItems
            name="Mastering"
            brief="Mastering is the finishing touch that makes your track ready for the world. We refine the overall sound, boost clarity, and ensure your jingle meets professional broadcast standards. This step guarantees your jingle will sound polished and consistent across TV, radio, and digital platforms."
            Bg={Mastering}
        />
      </div>
    </div>
  )
}

export default Services
