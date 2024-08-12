/* DEPENDENCIES */
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../utils/mutations";

/* CREATE PROJECT */
const CreateProject = (user) => {
  const [name, setName] = useState("");
  const [materials, setMaterials] = useState("");
  const [instructions, setInstructions] = useState("");
  const [pricePoint, setPricePoint] = useState("$");
  const [difficulty, setDifficulty] = useState("Newbie");
  const [craft, setCraft] = useState("Sewing");

  const [createProject] = useMutation(CREATE_PROJECT);

  const handleSubmit = (event) => {
    event.preventDefault();
    createProject({
      variables: {
        name,
        materials: materials.split(","),
        instructions: instructions.split("."),
        pricePoint,
        difficulty,
        craft,
      },
    })
      .then((response) => {
        console.log("Project created!", response.data.createProject);
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  console.log(user);
  if (!user?.id) {
    return <div className="title">Please sign in first!</div>;
  }

  return (
    <div id="new-proj">
      <h2 className="title" id="new-project-title">
        Create a new project
      </h2>
      <form
        className="borders inter"
        id="new-project-form"
        onSubmit={handleSubmit}
      >
        <p className="instruction">Name your new project:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div className="instruction">
          <p>Materials needed for the project:</p>
          <p className="sub-instruction">Separate each material by a comma</p>
        </div>
        <input
          type="text"
          value={materials}
          onChange={(e) => setMaterials(e.target.value)}
          required
        />
        <div className="instruction">
          <p>Instructions for the project:</p>
          <p className="sub-instruction">
            Separate each instruction by a period
          </p>
        </div>
        <input
          type="text"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          required
        />
        <p className="instruction">Select the price point for the project:</p>
        <select
          className="form-select borders"
          aria-label="price-point"
          id="price-point"
        >
          <option value="$">$10 – $20</option>
          <option value="$$">$20 – $80</option>
          <option value="$$$">$80+</option>
        </select>
        <p className="instruction">Select the difficulty of the project:</p>
        <select
          className="form-select borders"
          aria-label="difficulty"
          id="difficulty"
        >
          <option value="Newbie">Easy</option>
          <option value="Casual/Pro">Medium</option>
          <option value="Pro">Hard</option>
        </select>
        <p className="instruction">What type of craft is this?</p>
        <select
          className="form-select borders"
          aria-label="craft-type"
          id="craft-type"
        >
          <option value="Sewing">Sewing</option>
          <option value="Painting">Painting</option>
          <option value="Pottery">Pottery</option>
          <option value="Crochet">Crochet</option>
          <option value="Woodworking">Woodworking</option>
          <option value="Stained Glass">Stained Glass</option>
          <option value="Scrapbooking">Scrapbooking</option>
          <option value="Origami">Origami</option>
        </select>
        <button className="dark-button" id="create-project" type="submit">
          Create Project
        </button>
      </form>
    </div>
  );
};

/* EXPORT */
export default CreateProject;
