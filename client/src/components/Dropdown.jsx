import React, { useState } from "react";
import { QUERY_ALL_PROJECTS_CRAFTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const categoryHandler = (event) => {
    event.preventDefault();
    setCategory(event.target.text);
    console.log("category", category);
  };

  // Get project data
  // const { projectId } = useParams();

  // step 1 query all projects to receive projects array
  const {
    loading: projectsLoading,
    error: projectsError,
    data,
  } = useQuery(QUERY_ALL_PROJECTS_CRAFTS);

  const allProjects = data?.allProjects;
  console.log(allProjects);

  // step 2 map through results of querty and plug in to html elements
  const filteredArray = allProjects?.filter(
    (project) => project.craft.name === category
  );

  // Handle loading and error states
  if (projectsLoading) return <p>Loading...</p>;
  if (projectsError) throw Error;

  // Get projects based on selected craft

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
        <a onClick={categoryHandler} className="dropdown-item">
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
