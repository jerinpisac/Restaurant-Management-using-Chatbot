import React from 'react';
import '../styles/AboutPage.css';

function AboutPage({ props, ref }) {
  return (
    <div ref={ref} className="about-container">
      <div className="about-hero">
        <h1>About RV Restaurant</h1>
        <p>Where Taste Meets Tradition</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            RV Restaurant was founded with a passion for bringing families and friends together
            over hearty, delicious meals. What started as a small kitchen in our home has grown
            into a warm and welcoming space for food lovers across the city.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Philosophy</h2>
          <p>
            We believe in authenticity, freshness, and hospitality. Every dish is crafted using
            the finest ingredients, prepared with love, and served with care. Whether you're here
            for a quick bite or a full-course meal, we want every moment to feel like home.
          </p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Wide range of Indian and continental dishes</li>
            <li>Daily specials and seasonal menus</li>
            <li>Cozy ambience and family-friendly service</li>
            <li>Easy reservations via our RVRestoBot</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Visit Us</h2>
          <p>
            We’re open every day from 8 AM to 10 PM. Whether it’s breakfast with your loved ones,
            a business lunch, or a relaxed dinner — RV Restaurant is your go-to destination for
            unforgettable dining experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
