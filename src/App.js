import React, { useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Component/Footer/Footer";
import AboutUs from "./Pages/About";
import Organizer from "./Pages/Organizer";
import Event from "./Pages/Event";
import Generalinfo from "./Pages/Generalinfo";
import Schedule from "./Pages/Schedule";
import ChatBotButton from "./Component/ChatBotButton/ChatBotButton";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const mouse = { x: null, y: null };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    const colors = [
      "#FFD700", // Gold
      "#20c4daff", // Goldenrod
      "#37ff0fff", // Dark Goldenrod
      "#f0b3f5ff", // Wheat
      "#f3476cff", // Cornsilk
      "#e13bf0ff", // Moccasin
    ];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 1.5;
        this.dx = (Math.random() - 0.5) * 1.5;
        this.dy = (Math.random() - 0.5) * 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        const distance = Math.sqrt((this.x - mouse.x) ** 2 + (this.y - mouse.y) ** 2);
        const isHovered = distance < 50;

        ctx.beginPath();
        ctx.arc(this.x, this.y, isHovered ? 3 : this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;

        ctx.shadowBlur = isHovered ? 10 : 0;
        ctx.shadowColor = isHovered ? this.color : "transparent";

        ctx.fill();
        ctx.closePath();
      }

      update() {
        const distance = Math.sqrt((this.x - mouse.x) ** 2 + (this.y - mouse.y) ** 2);
        const targetRadius = distance < 50 ? 3 : 1.5;
        this.radius += (targetRadius - this.radius) * 0.1;

        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        this.draw();
      }
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(218, 165, 32, 0.2)";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => p.update());
      connectParticles();
      requestAnimationFrame(animate);
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
      }}
    />
  );
}


function App() {
  return (
    <div className="app-container">
      <ParticleBackground />
      <Router>
        <Navbar />
        <ChatBotButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/event" element={<Event />} />
          <Route path="/generalinfo" element={<Generalinfo />} />
          <Route path="/schedule" element={<Schedule />} />
         
        </Routes>
         
      </Router>
    </div>
  );
}

export default App;
