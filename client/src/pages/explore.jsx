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
    </div>
  );
};
export default Explore;
