import React from 'react'

function Navbar() {
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
      <div className="navbar-right">
        <ul>
            <li>Portfolio</li>
            <li>Portfolio</li>
            <li>Portfolio</li>
            <li>Portfolio</li>
        </ul>
        <button className="cta">
            Contact
        </button>
      </div>
    </div>
  )
}

export default Navbar
