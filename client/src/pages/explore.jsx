import React from "react";
import Dropdown from "../components/Dropdown";

const Explore = () => {
  return (
    <div id="explore">
      <p>Featured Craft of the Week</p>
      <div className="featured-craft">
        <h1 id="featured-craft">Flower Pots</h1>
      </div>
      <Dropdown />
      <div className="container">
        <div className="column" id="popular">
          <p>Popular Crafts</p>
          <a
            className="borders text-decoration-none"
            id="explore-btn"
            type="submit"
            role="button"
          >
            <div>Pottery</div>
          </a>
          <a
            className="borders text-decoration-none"
            id="explore-btn"
            type="submit"
            role="button"
          >
            <div>Crochet</div>
          </a>
        </div>
        <div className="column" id="new">
          <p>New Crafts</p>
          <a
            className="borders text-decoration-none"
            id="explore-btn"
            type="submit"
            role="button"
          >
            <div>Stained Glass</div>
          </a>
          <a
            className="borders text-decoration-none"
            id="explore-btn"
            type="submit"
            role="button"
          >
            <div>Jewelry</div>
          </a>
        </div>
        <div className="column" id="affordable">
          <p>Affordable Crafts</p>
          <a
            className="borders text-decoration-none"
            id="explore-btn"
            type="submit"
            role="button"
          >
            <div>Knitting</div>
          </a>
          <a
            className="borders text-decoration-none"
            id="explore-btn"
            type="submit"
            role="button"
          >
            <div>Clay Modeling</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Explore;
