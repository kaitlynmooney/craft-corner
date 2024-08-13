/* DEPENDENCIES */
import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useLocation } from "react-router-dom";
import { CREATE_PROJECT } from "../utils/mutations";

/* CREATE PROJECT */
const CreateProject = () => {
  const [name, setName] = useState("");
  const [materials, setMaterials] = useState("");
  const [instructions, setInstructions] = useState("");
  const [pricePoint, setPricePoint] = useState("$");
  const [difficulty, setDifficulty] = useState("Newbie");
  const [craft, setCraft] = useState("Sewing");
  const [success, setSuccess] = useState("");

  const [createProject] = useMutation(CREATE_PROJECT);
  const [user, setUser] = useState(null);

  // Get user
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.user) {
      setUser(location.state.user);
    }
  }, [location.state]);
  const userId = user?._id;

  const handleSubmit = (event) => {
    event.preventDefault();
    const materialArray = materials
      .split(",")
      .filter((item) => item.trim() !== "");
    const instructionArray = instructions
      .split(".")
      .filter((item) => item.trim() !== "");

    createProject({
      variables: {
        name,
        materials: materialArray,
        instructions: instructionArray,
        pricePoint,
        difficulty,
        craft,
        authorId: userId,
      },
    })
      .then((response) => {
        setSuccess("Your project has been created successfully!");

        // Add to authored projects array
        const updatedAuthoredProjects = [
          ...user.authoredProjects,
          response.data.createProject._id,
        ];
        const updatedUser = {
          ...user,
          authoredProjects: updatedAuthoredProjects,
        };
        setUser(updatedUser);

        // Reset the form
        setName("");
        setMaterials("");
        setInstructions("");
        setPricePoint("$");
        setDifficulty("Newbie");
        setCraft("Sewing");
      })
      .catch((error) => {
        console.error("Error creating project:", error);
      });
  };

  if (!user || !user._id) {
    return (
      <div className="title">
        Error! Please sign in and create a new project from your dashboard.
      </div>
    );
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
          onChange={(event) => setName(event.target.value)}
          required
        />
        <div className="instruction">
          <p>Materials needed for the project:</p>
          <p className="sub-instruction">Separate each material by a comma</p>
        </div>
        <input
          type="text"
          value={materials}
          onChange={(event) => setMaterials(event.target.value)}
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
          onChange={(event) => setInstructions(event.target.value)}
          required
        />
        <p className="instruction">Select the price point for the project:</p>
        <select
          className="form-select borders"
          aria-label="price-point"
          id="price-point"
          value={pricePoint}
          onChange={(event) => setPricePoint(event.target.value)}
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
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
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
          value={craft}
          onChange={(event) => setCraft(event.target.value)}
        >
          {/* <option value="Sewing">Sewing</option> */}
          <option value="Painting">Painting</option>
          <option value="Pottery">Pottery</option>
          <option value="Crochet">Crochet</option>
          <option value="Clay Modeling">Clay Modeling</option>
          <option value="Knitting">Knitting</option>
          <option value="Jewelry">Jewelry</option>
          {/* <option value="Woodworking">Woodworking</option> */}
          <option value="Stained-Glass">Stained Glass</option>
          {/* <option value="Scrapbooking">Scrapbooking</option> */}
          {/* <option value="Origami">Origami</option> */}
        </select>
        <div>
          <button className="dark-button" id="create-project" type="submit">
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

/* EXPORT */
export default CreateProject;
