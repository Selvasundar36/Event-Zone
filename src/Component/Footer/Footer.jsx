import React from 'react'
import './Footer.css'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      
      
      <div className="footer-column">
        <h3>Developed By</h3>
        <p><strong>Selvasunar M</strong></p>
        <p>Transforming Ideas Into Reality 🚀<br />
           Passion For Learning, Drive For Excellence 🙌<br />
           Striving For Growth, Aiming For Excellence ✨</p>
            <div className="social-icons">
           <a href="https://www.linkedin.com/in/selvasunar36/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077b5" />
          </a>
          <a className='ins' href="https://www.instagram.com/m_ss_36/" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill size={30} color="#E1306C" />
          </a>
          </div>
      </div>

      
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Organizers</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">General Info</a></li>
          <li><a href="#">Schedule</a></li>
        </ul>
      </div>

      
      <div className="footer-column">
        <h3>Contact Info</h3>
        <p>Email: <a href="mailto:ABCD@gmail.com">ABCD@gmail.com</a></p>
        <p>Phone: <a href="tel:+">+91 9999999999</a></p>
        <p>Address: cominggg</p>
        <div className="social-icons">
          <a className='ins' href="#" target="_blank" rel="noopener noreferrer">
            <RiInstagramFill size={30} color="#E1306C" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#3b5998" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077b5" />
          </a>
            
        </div>
      </div>
    </div>

    <div className="footer-credit">
      <p>Designed With ❤️ By Selva | MERN STACK Developer</p>
    </div>
    </>
  
  )
}

export default Footer