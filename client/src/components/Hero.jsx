import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/flower-hero.jpg";


const Hero = () => {
  return (
    <>
    <div className="hero">
      <img
        src={heroImage}
        alt="Hero image of bouquet of flowers"
        className="hero-image"
      />
      <div className="hero-content">
        <p id="explore-feature">Featured Craft of the Week</p>
        <div className="featured-craft">
          <Link  to="/project/ "id="featured-craft" role="button">
            Flower Bouquets
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
