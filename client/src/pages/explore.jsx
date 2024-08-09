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
      <div id="popular">
        <p>Popular Crafts</p>
        <button className="borders" id="popular-btn" type="submit">
          <div>Pottery</div>
        </button>
        <button className="borders" id="popular-btn" type="submit">
          <div>Crochet</div>
        </button>
      </div>
      <div id="new">
        <p>New Crafts</p>
        <button className="borders" id="popular-btn" type="submit">
          <div>Stained Glass</div>
        </button>
        <button className="borders" id="popular-btn" type="submit">
          <div>Jewelry</div>
        </button>
      </div>
      <div id="affordable">
        <p>Affordable Crafts</p>
        <button className="borders" id="popular-btn" type="submit">
          <div>Knitting</div>
        </button>
        <button className="borders" id="popular-btn" type="submit">
          <div>Clay Modeling</div>
        </button>
      </div>
    </div>
  );
};
export default Explore;
