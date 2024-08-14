import React, { useState, useEffect } from "react";

const Dropdown = ({ category, setCategory, categoryHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (e) => {
    categoryHandler(e);
    toggleDropdown();
  }

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
        Find Crafts
      </button>
      <div
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
        aria-labelledby="search-button"
      >
        <a onClick={handleDropdownClick} className="dropdown-item" href="">
          Crochet
        </a>
        <a onClick={handleDropdownClick} className="dropdown-item" href="">
          Knitting
        </a>
        <a onClick={handleDropdownClick} className="dropdown-item" href="#">
          Painting
        </a>
        <a onClick={handleDropdownClick} className="dropdown-item" href="#">
          Clay Modeling
        </a>
        <a onClick={handleDropdownClick} className="dropdown-item" href="#">
          Jewelry
        </a>
        <a onClick={handleDropdownClick} className="dropdown-item" href="#">
          Stained Glass
        </a>
        <a onClick={handleDropdownClick} className="dropdown-item" href="#">
          Pottery
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
