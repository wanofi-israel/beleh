import { ArrowBack } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='notfound-page'>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <Link to="/">Return to Home <ArrowBack/></Link>
    </div>
  )
}

export default NotFound 
