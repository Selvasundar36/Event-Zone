import React, { useState, useEffect } from 'react';
import './CSS/Organizer.css';
import "aos/dist/aos.css";

const organizers = [
  {
    name: "Dhanya Shri S",
    title: "Web Vision Coordinator",
    description:
      "Web Vision allows participants to explore innovative web design ideas, encouraging creativity and teamwork while providing a fun and memorable experience.",
    image: "https://thumbs.dreamstime.com/b/serious-male-teacher-formal-wear-holding-wooden-pointer-front-chalkboard-equations-155809695.jpg",
  },
  {
    name: "Shanthini K",
    title: "Pitch Perfect Coordinator",
    description:
      "Pitch Perfect allows participants to showcase their presentation skills and creativity, promoting collaboration and offering an exciting and memorable experience.",
    image: "https://thumbs.dreamstime.com/b/serious-male-teacher-formal-wear-holding-wooden-pointer-front-chalkboard-equations-155809695.jpg",
  },
  {
    name: "Rithikka R S",
    title: "Connect & Crack Coordinator",
    description:
      "Connect & Crack challenges participants to solve puzzles and think critically, fostering teamwork and providing an exciting and memorable experience.",
    image: "https://thumbs.dreamstime.com/b/serious-male-teacher-formal-wear-holding-wooden-pointer-front-chalkboard-equations-155809695.jpg",
  },
  {
    name: "kkk S",
    title: "Web Vision Coordinator",
    description:
      "Web Vision allows participants to explore innovative web design ideas, encouraging creativity and teamwork while providing a fun and memorable experience.",
    image: "https://thumbs.dreamstime.com/b/serious-male-teacher-formal-wear-holding-wooden-pointer-front-chalkboard-equations-155809695.jpg",
  },
  {
    name: "kk K",
    title: "Pitch Perfect Coordinator",
    description:
      "Pitch Perfect allows participants to showcase their presentation skills and creativity, promoting collaboration and offering an exciting and memorable experience.",
    image: "https://thumbs.dreamstime.com/b/serious-male-teacher-formal-wear-holding-wooden-pointer-front-chalkboard-equations-155809695.jpg",
  },
  {
    name: "Rithikka R S",
    title: "Connect & Crack Coordinator",
    description:
      "Connect & Crack challenges participants to solve puzzles and think critically, fostering teamwork and providing an exciting and memorable experience.",
    image: "https://thumbs.dreamstime.com/b/serious-male-teacher-formal-wear-holding-wooden-pointer-front-chalkboard-equations-155809695.jpg",
  },
];

const Organizer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerView = 3;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex + cardsPerView >= organizers.length
          ? 0
          : prevIndex + cardsPerView
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex(prev =>
      prev + cardsPerView >= organizers.length ? 0 : prev + cardsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prev =>
      prev - cardsPerView < 0 ? organizers.length - cardsPerView : prev - cardsPerView
    );
  };

  const visibleOrganizers = organizers.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <div className="organizer-section" data-aos="fade-up">
      <h1 className="organizer-title" data-aos="fade-up">Event Organizers</h1>
      <div className="organizer-slider">
        <button className="nav-btn prev-btn" onClick={prevSlide}>‹</button>
        <div className="organizer-track">
          {visibleOrganizers.map((org, index) => (
            <div className="organizer-card" data-aos="fade-up" key={index}>
              <img src={org.image} alt={org.name} className="organizer-img" />
              <h3>{org.name}</h3>
              <h4>{org.title}</h4>
              <p>{org.description}</p>
              <div className="stars">★★★★★</div>
            </div>
          ))}
        </div>
        <button className="nav-btn next-btn" data-aos="fade-up" onClick={nextSlide}>›</button>
      </div>
    </div>
  );
};

export default Organizer;
