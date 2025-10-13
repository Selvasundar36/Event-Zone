import React from 'react'
import './CSS/Generalinfo.css'
const Generalinfo = () => {
  return (
    <section class="general-info-section">
  <h2 class="general-info-title" data-aos="fade-up">General Information</h2>
  <p class="general-info-subtitle" data-aos="fade-up">
    Please review the general information provided for participants to ensure a smooth and informed experience.
  </p>

  <div class="timeline" data-aos="fade-up">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>Eligibility</h3>
        <p>UG Students from Arts and Sciences background and MBA and PG Students (MCA & MSC – CS are invited)</p>
      </div>
    </div>

    <div class="timeline-item" data-aos="fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>Registration Fee</h3>
        <p>Registration Fee Per Participant is Rs.200/-</p>
      </div>
    </div>

    <div class="timeline-item" data-aos="fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>Multiple Events</h3>
        <p>Participants can participate in multiple events with single registration</p>
      </div>
    </div>

    <div class="timeline-item" data-aos="fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>Team Registration</h3>
        <p>Each member of the team must be individually registered</p>
      </div>
    </div>

    <div class="timeline-item" data-aos="fade-up">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>Identification</h3>
        <p>Participants must wear their college ID card as proof of identity</p>
      </div>
    </div>
  </div>

  
</section>

  )
}

export default Generalinfo