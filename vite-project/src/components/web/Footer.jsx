import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="flex-shrink-0 pl-20">
                        <img className="block lg:hidden h-8 w-auto" src="https://i.pinimg.com/236x/10/cc/fb/10ccfb09dee1a6975d90eeef70c9b8bc.jpg" alt="Logo" />
                        <img className="hidden lg:block h-12" src="https://i.pinimg.com/236x/10/cc/fb/10ccfb09dee1a6975d90eeef70c9b8bc.jpg" alt="Logo" />
                    </div>
      <div className="footer-content">
      
        
        <div className="footer-sections">
          <div className="footer-section">
            <h4>About us</h4>
            <ul className="social-links">
              <li>
                <p>Blogs</p>
                
              </li>
              <li>
               <p>FAQs</p>
              </li>
              <li>
               <p>Refund Policy</p>
              </li>
              <li>
               <p>Terms and Services</p>
              </li>
              
            </ul>
            
          </div>
          

          <div className="footer-section">
            <h4>Categories</h4>
            <ul className="social-links">
              <li>
                <p>Best Sellers</p>
              </li>
              <li>
                <p>New Products</p>
              </li>
              <li>
                <p>Baby Toys</p>
              </li>
              <li>
                <p>Puzzel For Kids</p>
              </li>
            </ul>
            
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} className='pr-2'/> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} className='pr-2'/> Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className='pr-2' /> Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className='pr-2'/> LinkedIn
                </a>
              </li>
            </ul>
            
          </div>
          
          <div className="footer-section">
            <h4>Contact us</h4>
            <p>www.toysshop.com</p>
            
            <p>+0 6785433258</p>
            
            <p>123 Toy Lane<br />Toy City, TC 45678</p>
          </div>
        </div>
        <br></br>
        <br></br>
        
        <p>&copy; 2024 Toys Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;