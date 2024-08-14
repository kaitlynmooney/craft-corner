import React, { useState } from "react";
import heroImage from "../images/flower-hero.jpg";
import Projects from "../components/Projects";
import { QUERY_ALL_PROJECTS_CRAFTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Hero = () => {
  const [category, setCategory] = useState("");
  const { data } = useQuery(QUERY_ALL_PROJECTS_CRAFTS);

  const allProjects = data?.allProjects;

  let filteredArray = allProjects || [];

  if (category) {
    filteredArray = allProjects?.filter(
      (project) => project.craft.name === category
    );
  }

  // category handler
  const categoryHandler = (selectedCategory) => {
    setCategory(selectedCategory);
    // event.preventDefault();
    // setCategory(event.target.innerText);
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
            <button
              id="featured-craft"
              // role="button"
              onClick={() => categoryHandler("Floristry")}
            >
              Flower Bouquet
            </button>
          </div>
        </div>
      </div>
      <h2 className="category-title">{category}</h2>
      {category && <Projects projects={filteredArray} />}
    </>
  );
};

export default Hero;
