import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PROJECTS_CRAFTS } from "../utils/queries";
import Dropdown from "../components/Dropdown";
// category state
import Projects from "../components/Projects";
import Hero from "../components/Hero";

const Explore = () => {
  const [category, setCategory] = useState("");
  // query all projects
  const {
    loading: projectsLoading,
    error: projectsError,
    data,
  } = useQuery(QUERY_ALL_PROJECTS_CRAFTS);

  const allProjects = data?.allProjects;

  let filteredArray = allProjects || [];
  if (category) {
    filteredArray = allProjects?.filter(
      (project) => project.craft.name === category
    );
  }

  // category handler
  const categoryHandler = (event) => {
    event.preventDefault();
    setCategory(event.target.innerText);
  };

  // conditionally render cards if category isn't selected, and filtered projects if category is selected

  // Handle loading and error states
  if (projectsLoading) return <p className="loading-spinner"></p>;
  if (projectsError) throw Error;

  return (
    <div id="explore">
      <Hero />
      <Dropdown
        id="dropdown"
        category={category}
        setCategory={setCategory}
        categoryHandler={categoryHandler}
      />
      {category ? (
        <Projects projects={filteredArray} />
      ) : (
        <div className="container">
          <div className="column" id="popular">
            <p>Popular Crafts</p>
            <a
              className="borders text-decoration-none pottery-btn"
              href="#"
              id="explore-btn"
              role="button"
              type="submit"
              onClick={categoryHandler}
            >
              <div>Pottery</div>
            </a>
            <a
              className="borders text-decoration-none crochet-btn"
              href="#"
              id="explore-btn"
              role="button"
              type="submit"
              onClick={categoryHandler}
            >
              <div>Crochet</div>
            </a>
          </div>
          <div className="column" id="new">
            <p>New Crafts</p>
            <a
              className="borders text-decoration-none glass-btn"
              href="#"
              id="explore-btn"
              role="button"
              type="submit"
              onClick={categoryHandler}
            >
              <div>Stained Glass</div>
            </a>
            <a
              className="borders text-decoration-none jewelry-btn"
              href="#"
              id="explore-btn"
              role="button"
              type="submit"
              onClick={categoryHandler}
            >
              <div>Jewelry</div>
            </a>
          </div>
          <div className="column" id="affordable">
            <p>Affordable Crafts</p>
            <a
              className="borders text-decoration-none knitting-btn"
              href="#"
              id="explore-btn"
              role="button"
              type="submit"
              onClick={categoryHandler}
            >
              <div>Knitting</div>
            </a>
            <a
              className="borders text-decoration-none clay-btn"
              href="#"
              id="explore-btn"
              role="button"
              type="submit"
              onClick={categoryHandler}
            >
              <div>Clay Modeling</div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Explore;
