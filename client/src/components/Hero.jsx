import React from "react";
import heroImage from "../../public/flower-hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img
        src={heroImage}
        alt="Hero image of bouquet of flowers"
        className="hero-image"
      />
      <div className="hero-content">
        <p id="explore-feature">Featured Craft of the Week</p>
        <div className="featured-craft">
          <h1 id="featured-craft">Flower Pots</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
