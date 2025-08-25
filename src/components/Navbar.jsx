import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

  const [open,setOpen]=useState(false)
  const isMobile=useMediaQuery({maxWidth:770})
  const location=useLocation()
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
  console.log(location.pathname);
  
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
            <li onClick={()=>setOpen(false)} className='nav-links'><Link to="/offerings" aria-current={location.pathname.startsWith('/offerings') ? 'page' : undefined}>Offerings</Link> </li>
            <li onClick={()=>setOpen(false)} className='nav-links'><Link to="/portfolio/1" aria-current={location.pathname.startsWith('/portfolio') ? 'page' : undefined}>Portfolio</Link></li>
            <li onClick={()=>setOpen(false)} className='nav-links'><Link to="/about"  aria-current={location.pathname.startsWith('/about') ? 'page' : undefined}>About</Link> </li>
            <li onClick={()=>setOpen(false)} className='nav-links'><Link to="/insights"  aria-current={location.pathname.startsWith('/insights') ? 'page' : undefined}>Insights</Link></li>
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
