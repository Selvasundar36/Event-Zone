import React, { useEffect } from "react";
import "./CSS/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaRocket,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-section">
      
     
     <div className="about-overlay">
        <h1  data-aos="fade-up">About Us</h1>
        
      <div>
       
      </div>

      <div className="about-content">
        <div className="about-block" data-aos="fade-up">
          <FaRocket className="about-icon" />
          <h2  className="hover-underline">Our Journey</h2>
          <p>
            EVENT NAME is a Premier National-Level Technical Symposium designed for college students across the country.
            Since 2014, CyberTech has been transforming young minds to showcase their skills in cutting-edge technologies.
            From Coding Battles to Hackathons, we offer a unique experience for participants to expand their knowledge base.
            With industry leaders, join us in shaping the future of technology!
          </p>
        </div>

        <div className="about-block" data-aos="fade-up">
          <FaMapMarkerAlt className="about-icon" />
          <h2 className="hover-underline">Venue & Schedule</h2>
          <p>
            <strong>Venue:</strong> Department Of CSE, ABC College Of Technology, Salem.<br />
            <FaCalendarAlt className="inline-icon" /> <strong>Date:</strong> 12th October 2024<br />
            Our one-day event aims to immerse yourself in a day filled with learning, collaboration, and innovation.
            Our lineup includes tech-focused workshops & engaging hands-on experiences!
          </p>
        </div>

        <div className="about-block" data-aos="fade-up">
          <FaBullseye className="about-icon" />
          <h2 className="hover-underline">Our Mission</h2>
          <p>
            At CyberTech, our mission is to cultivate a culture of innovation and creativity among students.
            We aim to provide a platform where students can come together to solve real-world challenges and contribute
            to the advancement of technology and cybersecurity.
          </p>
        </div>

        <div className="about-block" data-aos="fade-up">
          <FaEye className="about-icon" />
          <h2 className="hover-underline">Our Vision</h2>
          <p>
            We envision a future where students are empowered to lead the changing technological advancements.
            Our goal is to help the next generation of tech leaders and innovators through comprehensive knowledge
            and collaboration opportunities.
          </p>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default About;
