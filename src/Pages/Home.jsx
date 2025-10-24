import React from 'react'
import './CSS/Home.css';
import About from './About';
import Organizer from './Organizer';
import Event from './Event';
import Generalinfo from './Generalinfo';
import Schedule from './Schedule';
import Footer from '../Component/Footer/Footer';
import 'aos/dist/aos.css';






const Home = () => {
  return (
    <div>
 
  <div class="banner" data-aos="fade-up">
    <div class="overlay">
      <h1>EVent'25</h1>
      <h2>Department of <br/>"COMPUTER SCIENCE AND ENGINEERING"</h2>
      <p class="tagline">A NATIONAL LEVEL TECHNICAL SYMPOSIUM</p>
      <p class="join">Let’s Join Now !!</p>
      <p class="date">Event Starts In: <strong>08 Oct 2025, 11:00 AM</strong></p>
      <a href="#" class="register-btn">Register Now</a>
    </div>
    
  </div>
   <About />
   
   <Organizer />
   <Event />
   <Generalinfo />
   <Schedule />
   <Footer />
  </div>


  )
}

export default Home