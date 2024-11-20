import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Navbar import
import "./HeroPage.css";

const HeroPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulates a page load effect
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const handleLoginClick = () => {
    navigate("/landing");
  };

  return (
    <div
      className={`hero-page transition-opacity duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div
          className={`hero-content transition-transform duration-1000 ${
            isLoaded ? "translate-x-0" : "translate-x-[50%]"
          }`}
        >
          <h1 className="hero-title">Welcome to Your Ultimate Portal</h1>
          <p className="hero-subtitle">
            A platform to manage projects, connect with alumni mentors, and
            track progress effortlessly.
          </p>
          <button onClick={handleLoginClick} className="hero-button">
            Login Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2 className="section-title">About Our Portal</h2>
        <p className="section-description">
          Our portal is designed for students and alumni to collaborate
          seamlessly. With real-time tracking, academic growth insights, and
          mentorship, you can achieve your goals effortlessly.
        </p>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "This portal transformed how I manage projects and connect with
              mentors!"
            </p>
            <h3 className="testimonial-author">– Student A</h3>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Guiding students through this platform has been an amazing
              experience."
            </p>
            <h3 className="testimonial-author">– Alumni B</h3>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "The tracking tools have been invaluable for keeping up with
              assignments."
            </p>
            <h3 className="testimonial-author">– Student C</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Ultimate Portal. All Rights Reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#top">Back to Top</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HeroPage;
