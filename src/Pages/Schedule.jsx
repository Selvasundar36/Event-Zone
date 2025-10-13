import React from 'react'
import './CSS/Schedule.css'
const Schedule = () => {
  return (
<section class="schedule-section">
  <h2 class="schedule-title" data-aos="fade-up">Event Schedule</h2>

  <div class="schedule-grid">
    
    <div class="schedule-block" data-aos="fade-up">
      <h3>10:00 - 11:00</h3>
      <ul>
        <li><strong>Paper Presentation</strong> – Technical / Mini Auditorium</li>
        <li><strong>Web Designing</strong> – Technical / Mini Hall</li>
        <li><strong>Coding - Round 1</strong> – Technical / Classroom</li>
        <li><strong>ESM (Earlier known as JAM)</strong> – Non-Technical / Classroom</li>
        <li><strong>Connection - Round 1</strong> – Non-Technical / Snow Campus</li>
        <li><strong>Data Visualization</strong> – Technical / Classroom</li>
        <li><strong>Debate</strong> – Non-Technical / Main Auditorium</li>
      </ul>
    </div>

    
    <div class="schedule-block" data-aos="fade-up">
      <h3>11:00 - 12:00</h3>
      <ul>
        <li><strong>Coding (Hackathon)</strong> – Technical / Mini Hall</li>
        <li><strong>Photography (Live Event)</strong> – Non-Technical / Snow Campus</li>
        <li><strong>Connection - Final Round</strong> – Non-Technical / Snow Campus</li>
        <li><strong>Treasure Hunt - Round 1</strong> – Non-Technical / Snow Campus</li>
      </ul>
    </div>

    <div class="schedule-block lunch" data-aos="fade-up">
      <h3 className='lunch-time'>1:00 - 2:00</h3>
      <p><strong>Lunch Break</strong></p>
    </div>


    <div class="schedule-block" data-aos="fade-up">
      <h3>2:00 - 2:45</h3>
      <ul>
        <li><strong>Quiz - Final Round</strong> – Non-Technical / Mini Auditorium</li>
        <li><strong>Placement Coaching</strong> – Non-Technical / Classroom</li>
        <li><strong>Connection - Final Round</strong> – Non-Technical / Snow Campus</li>
        <li><strong>Treasure Hunt - Round 2</strong> – Non-Technical / Snow Campus</li>
      </ul>
    </div>
  </div>
</section>

  )
}

export default Schedule