import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function NotFound() {

  useGSAP(()=>{
    gsap.to('.logoWhite',{
      display:"none",
    },0)
    gsap.to('.logoDark',{
      display:"flex",
    },0)
  },[])
  return (
    <div className='notfound-page'>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <Link to="/"> <ArrowBack/> Return to Home</Link>
    </div>
  )
}

export default NotFound 
