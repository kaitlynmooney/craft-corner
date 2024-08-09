import React, { useState } from "react";

const Explore = () => {
  return (
    <div id="explore">
      <p>Featured Craft of the Week</p>
      <div className="featured-craft">
        <h1 id="featured-craft">Flower Pots</h1>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Search Crafts
        </button>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Crochet
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Knitting
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Painting
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Clay Modeling
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Jewelry
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Stained Glass
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Pottery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Explore;
