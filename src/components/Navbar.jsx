import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

function Navbar() {

  const [open,setOpen]=useState(false)
  const isMobile=useMediaQuery({maxWidth:770})

  const toggleMenu=()=>{
    setOpen(prev=>!prev)
  }
  
  useEffect(()=>{
    if(open){
      document.body.classList.add("stop-scrolling");
    }else{
      document.body.classList.remove("stop-scrolling");
    }
  },[open])
  
  useGSAP(()=>{
    if(isMobile && open){
      gsap.from('.nav-links,.cta',{
        yPercent:100,
        opacity:0,
        stagger:.04
      })
    }
  },[open])
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className="logo">
            Logo
        </div>
      </div>
      <div className="navbar-center">
        Bleh Jingles 
      </div>
      <div className={`navbar-right ${open?"open":""}`}>
        <ul>
            <li onClick={toggleMenu} className='nav-links'>Offerings</li>
            <li onClick={toggleMenu} className='nav-links'>Portfolio</li>
            <li onClick={toggleMenu} className='nav-links'>About</li>
            <li onClick={toggleMenu} className='nav-links'>Insights</li>
        </ul>
        <button className="cta">
            Contact
        </button>
      </div>
      <div className={`humburger-menu ${open?"open":""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
      </div>
    </div>
  )
}

export default Navbar
