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
        This website is a general communication for informational purposes only
        and is not and should not be construed as advice or a recommendation
        concerning any security or other asset, or an offer to sell, or the
        solicitation of an offer to buy, any security, product, service of
        Hartmann Capital (together with its subsidiaries and affiliates,
        “Hartmann”) or any fund for which Hartmann Capital serves as investment
       
      </p>

        <p className="footer-description">
        manager or general partner, whether existing or contemplated, for which
        an offer can be made only by such fund’s confidential private placement
        memorandum and in compliance with applicable law. Hartmann Capital is
        not registered as an investment adviser with the U.S. Securities and
        Exchange Commission. Hartmann Capital is federally exempt under the
        Investment Company Act, Section 3 (c)(1) Rule 506 (c), therefore, is not
        required to register with the SEC or any state regulatory agency.
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
