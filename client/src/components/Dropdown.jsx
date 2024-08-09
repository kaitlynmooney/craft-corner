import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="search-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
      >
        Search Crafts
      </button>
      <div
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        aria-labelledby="search-button"
      >
        <a className="dropdown-item" href="#">
          Crochet
        </a>
        <a className="dropdown-item" href="#">
          Knitting
        </a>
        <a className="dropdown-item" href="#">
          Painting
        </a>
        <a className="dropdown-item" href="#">
          Clay Modeling
        </a>
        <a className="dropdown-item" href="#">
          Jewelry
        </a>
        <a className="dropdown-item" href="#">
          Stained Glass
        </a>
        <a className="dropdown-item" href="#">
          Pottery
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
