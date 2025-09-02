import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/logo.png" alt="Hartmann Capital" />
        </div>
        <div className="footer-contacts">
          <div className="footer-contact">
            <span className="footer-label">General Inquiries</span>
            <a href="mailto:hq@hartmanncapital.com">hq@hartmanncapital.com</a>
          </div>
          <div className="footer-contact">
            <span className="footer-label">Phone No.</span>
            <a href="tel:+251911607511">+251 911 607 511</a>
          </div>
          <div className="footer-contact">
            <span className="footer-label">Our Investors</span>
            <a href="mailto:invest@hartmanncapital.com">
              invest@hartmanncapital.com
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
          <a href="#"><LinkedInIcon/></a>
          <a href="#"><InstagramIcon/></a>
          <a href="#"><XIcon/></a>
          <a href="#"><FacebookIcon/></a>
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="footer-links">
          <li>Offerings ▾</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>News & Insights</li>
          <li>Contact</li>
        </ul>
        <ul className="footer-legal">
          <li>Privacy Statement</li>
          <li>Terms of Use</li>
        </ul>
        
        <div className="footer-credits">
          <span>Design by Dylan</span> <span>Code by Dennis</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
