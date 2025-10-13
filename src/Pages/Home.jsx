import React from 'react'
import './CSS/Home.css';
import About from './About';
import Organizer from './Organizer';





const Home = () => {
  return (
    <div>
    
  <div class="banner">
    <div class="overlay">
      <h1>EVent'25</h1>
      <h2>Department of <br/>"COMPUTER SCIENCE AND ENGINEERING"</h2>
      <p class="tagline">A NATIONAL LEVEL TECHNICAL SYMPOSIUM</p>
      <p class="join">Let’s Join Now !!</p>
      <p class="date">Event Starts In: <strong>08 Oct 2025, 11:00 AM</strong></p>
      <a href="#" class="register-btn">Register Now</a>
    </div>
    <div class="help-icon">💬 Need Help?</div>
  </div>
   <About />
   
   <Organizer />
  </div>


  )
}

export default Home