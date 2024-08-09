import React from "react";
import Dropdown from "../components/Dropdown";
import Hero from "../components/Hero";

const Explore = () => {
  return (
    <div id="explore">
      <Hero/>
      {/* <p id="explore-feature">Featured Craft of the Week</p>
      <div className="featured-craft">
        <h1 id="featured-craft">Flower Pots</h1>
      </div> */}
      <Dropdown id="dropdown" />
      <div className="container">
        <div className="column" id="popular">
          <p>Popular Crafts</p>
          <a
            className="borders text-decoration-none pottery-btn"
            href="#"
            id="explore-btn"
            role="button"
            type="submit"
          >
            <div>Pottery</div>
          </a>
          <a
            className="borders text-decoration-none crochet-btn"
            href="#"
            id="explore-btn"
            role="button"
            type="submit"
          >
            <div>Crochet</div>
          </a>
        </div>
        <div className="column" id="new">
          <p>New Crafts</p>
          <a
            className="borders text-decoration-none glass-btn"
            href="#"
            id="explore-btn"
            role="button"
            type="submit"
          >
            <div>Stained Glass</div>
          </a>
          <a
            className="borders text-decoration-none jewelry-btn"
            href="#"
            id="explore-btn"
            role="button"
            type="submit"
          >
            <div>Jewelry</div>
          </a>
        </div>
        <div className="column" id="affordable">
          <p>Affordable Crafts</p>
          <a
            className="borders text-decoration-none knitting-btn"
            href="#"
            id="explore-btn"
            role="button"
            type="submit"
          >
            <div>Knitting</div>
          </a>
          <a
            className="borders text-decoration-none clay-btn"
            href="#"
            id="explore-btn"
            role="button"
            type="submit"
          >
            <div>Clay Modeling</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Explore;
