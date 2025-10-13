import React, { useState, useEffect } from 'react';
import './CSS/Organizer.css';
import "aos/dist/aos.css";

const organizers = [
  {
    name: "Dhanya Shri S",
    title: "Web Vision Coordinator",
    description:
      "Web Vision allows participants to explore innovative web design ideas, encouraging creativity and teamwork while providing a fun and memorable experience.",
    image: "/images/dhanya.png",
  },
  {
    name: "Shanthini K",
    title: "Pitch Perfect Coordinator",
    description:
      "Pitch Perfect allows participants to showcase their presentation skills and creativity, promoting collaboration and offering an exciting and memorable experience.",
    image: "/images/shanthini.png",
  },
  {
    name: "Rithikka R S",
    title: "Connect & Crack Coordinator",
    description:
      "Connect & Crack challenges participants to solve puzzles and think critically, fostering teamwork and providing an exciting and memorable experience.",
    image: "/images/rithikka.png",
  },
  {
    name: "kkk S",
    title: "Web Vision Coordinator",
    description:
      "Web Vision allows participants to explore innovative web design ideas, encouraging creativity and teamwork while providing a fun and memorable experience.",
    image: "/images/dhanya.png",
  },
  {
    name: "kk K",
    title: "Pitch Perfect Coordinator",
    description:
      "Pitch Perfect allows participants to showcase their presentation skills and creativity, promoting collaboration and offering an exciting and memorable experience.",
    image: "/images/shanthini.png",
  },
  {
    name: "Rithikka R S",
    title: "Connect & Crack Coordinator",
    description:
      "Connect & Crack challenges participants to solve puzzles and think critically, fostering teamwork and providing an exciting and memorable experience.",
    image: "data:image/jpeg;base64,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",
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
