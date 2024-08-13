import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../images/flower-hero.jpg";
import Projects from "../components/Projects";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PROJECTS_CRAFTS } from "../utils/queries";

const Hero = () => {
  const [category, setCategory] = useState("");
  // query all projects
  const {
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

  return (
    <>
    <div className="hero">
      <img
        src={heroImage}
        alt="Hero image of bouquet of flowers"
        className="hero-image"
      />
      <div className="hero-content">
        <p id="explore-feature">Featured Craft of the Week</p>
        <div className="featured-craft">
          <Link to="/project/" onClick={categoryHandler} id="featured-craft" role="button">
            Flower Bouquets
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
