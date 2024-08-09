import React, { useEffect, useState } from "react";

const Home = () => {
  // set timeout loading variable to true
  // make array of source and title
  // one iframe
  // onload on last iframe
  // loading set to false

  return (
    <div id="homepage">
      <div className="homepage-carousel">
        <iframe
          src="https://player.vimeo.com/video/996398991?autoplay=1&loop=1&background=1"
          allow="autoplay; fullscreen"
          title="jewelry_making"
        ></iframe>
        <iframe
          src="https://player.vimeo.com/video/996398975?autoplay=1&loop=1&background=1"
          allow="autoplay; fullscreen"
          title="crocheting"
        ></iframe>
        <iframe
          src="https://player.vimeo.com/video/996390689?autoplay=1&loop=1&background=1"
          allow="autoplay; fullscreen"
          title="painting"
        ></iframe>
        <iframe
          src="https://player.vimeo.com/video/996399006?autoplay=1&loop=1&background=1"
          allow="autoplay; fullscreen"
          title="knitting"
        ></iframe>
        <iframe
          src="https://player.vimeo.com/video/996400649?autoplay=1&loop=1&background=1"
          allow="autoplay; fullscreen"
          title="pottery"
        ></iframe>
        <div id="last-carousel-item">
          <p className="sofia" id="homepage-title">
            Craft Corner
          </p>
          <p className="inter" id="homepage-subtitle">
            Let's get crafty.
          </p>
        </div>
      </div>
      <div id="homepage-content">
        <button className="borders hover-borders" id="start-crafting">
          Start crafting
        </button>
      </div>
    </div>
  );
};

export default Home;
