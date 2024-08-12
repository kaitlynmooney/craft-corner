import React, { useState } from "react";
import { QUERY_ALL_PROJECTS } from "../utils/queries";
import Projects from "../components/Projects";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

// Get project data
const { loading: projectsLoading, error: projectsError, data: projectsData } = useQuery(QUERY_ALL_PROJECTS);
const projects = projectsData?.allProjects;

// Handle loading and error states
if (userLoading || projectsLoading) return <p>Loading...</p>;
if (userError|| projectsError) throw Error;


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
