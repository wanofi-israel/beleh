import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import blehTypo from "../assets/images/blehTypoWhite.png"
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={blehTypo} alt="bleh-logo" height={50} style={{aspectRatio:9/6}} className='logoWhite'/>
        </div>
        <div className="footer-contacts">
          <div className="footer-contact">
            <span className="footer-label">Email</span>
            <a href="mailto:info@blehJingels.et">info@blehJingels.et</a>
          </div>
          <div className="footer-contact">
            <span className="footer-label">Phone No.</span>
            <a href="tel:+251911607511">+251 911 607 511</a>
          </div>
          <div className="footer-contact">
            <span className="footer-label">General Manager</span>
            <a href="mailto:nathnael@blehJingels.et">
              nathnael@blehJingels.et
            </a>
          </div>
        </div>
      </div>
      <div className="footer-middle">

      <p className="footer-description">
        Bleh Jingles is where stories find their sound. With passion, creativity, and purpose, 
        we craft original jingles and sonic identities that capture attention, connect with audiences, 
        and make every brand unforgettable.
       
      </p>

        <p className="footer-description">
        Founded by Natnael Girmachew, Bleh Jingles was built on a love for music and a dedication to helping brands stand out. We are not a licensing agency or distributor every project is a direct collaboration shaped by creativity, reliability, and purpose, ensuring each sound reflects the unique identity of our partners.
      </p>
      <div className="footer-social">
          <Link href="#"><LinkedInIcon/></Link>
          <Link href="#"><InstagramIcon/></Link>
          <Link href="#"><XIcon/></Link>
          <Link href="#"><FacebookIcon/></Link>
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="footer-links">
          <Link to='/'>Home</Link>
          <HashLink to="/#services">Services</HashLink>
          <Link to='/portfolio/CBE'>Portfolio</Link>
          <Link to='/about'>About</Link>
          <HashLink to="#contact_us">Contact</HashLink>
        </ul>
        
        <div className="footer-credits">
          &copy; 2025 Bleh Jingles. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
