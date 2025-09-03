import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, useLocation } from 'react-router-dom'
import Logo from "../assets/images/blehLogo.png"
import LogoDesktop from "../assets/images/blehLogoDesktopWhite.png"
import LogoDesktopDark from "../assets/images/blehLogoDesktopDark.png"
import blehTypo from "../assets/images/blehTypoWhite.png"
import blehTypoDark from "../assets/images/blehTypoDark.png"
import { HashLink } from 'react-router-hash-link'
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
  
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <div className="nav-logo">
          {
            isMobile?<Link to="/"> <img src={Logo} alt="bleh-logo" width={40}/></Link>:<Link to="/"><img src={LogoDesktop} alt="bleh-logo" width={80} className='logoWhite'/> <img src={LogoDesktopDark} alt="bleh-logo" width={80} className='logoDark'/></Link>
          }
            
        </div>
      </div>
      <div className="navbar-center">
        <img src={blehTypo} alt="bleh-logo" height={50} className='logoWhite'/> <img src={blehTypoDark} alt="bleh-logo" height={50}  className='logoDark'/>
      </div>
      <div className={`navbar-right ${open?"open":""}`}>
        <ul>
            <li onClick={()=>setOpen(false)} className='nav-links'><Link to="/"  aria-current={location.pathname==='/'&& location.hash==='' ? 'page' : undefined}>Home</Link></li>
            <li onClick={()=>setOpen(false)} className='nav-links'><HashLink to="/#services" aria-current={location.hash.startsWith('#services') ? 'page' : undefined}>Services</HashLink> </li>
            <li onClick={()=>setOpen(false)} className='nav-links'><Link to="/portfolio/Tele-Birr" aria-current={location.pathname.startsWith('/portfolio')&& location.hash==='' ? 'page' : undefined}>Portfolio</Link></li>
            <li onClick={()=>setOpen(false)} className='nav-links'><Link to="/about"  aria-current={location.pathname.startsWith('/about')&& location.hash==='' ? 'page' : undefined}>About</Link> </li>
        </ul>
        <HashLink to="#contact_us" className="cta">
            Contact
        </HashLink>
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
