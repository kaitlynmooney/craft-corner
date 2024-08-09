import { useState } from "react";

const Explore = () => {
  return (
    <div id="explore">
      <p>Featured Craft of the Week</p>
      <div className="featured-craft">
        <h1 id="featured-craft">Flower Pots</h1>
      </div>
      <input
        class="form-control"
        list="datalistOptions"
        id="search-craft"
        placeholder="Search for a craft"
      ></input>
      <datalist id="datalistOptions">
        <option value="Jewelry Making"></option>
        <option value="Sewing"></option>
        <option value="Pottery"></option>
        <option value="Painting"></option>
        <option value="Stained Glass Making"></option>
        <option value="Crocheting"></option>
      </datalist>
    </div>
  );
};
export default Explore;
