/* DEPENDENCIES */
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Projects from "../components/Projects";

/* MY PROJECTS */
const MyProjects = () => {
  const location = useLocation();
  const { user } = location.state || {};

  const projects = user.authoredProjects;

  const initialCheckedItems = projects
    ? new Array(projects.length).fill(false)
    : [];
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [savedProjects, setSavedProjects] = useState(user?.savedProjects || []);

  // Load checkbox state from local storage on component mount
  useEffect(() => {
    try {
      const storedCheckedItems = JSON.parse(
        localStorage.getItem("checkedItems")
      );
      if (Array.isArray(storedCheckedItems)) {
        setCheckedItems(storedCheckedItems);
      }
    } catch (error) {
      console.error("Failed to load checked items from local storage:", error);
    }
  }, []); // This effect only runs once on mount

  // Update savedProjects when checkedItems change
  useEffect(() => {
    // Gather checked project IDs
    const checkedProjectIds = projects
      .filter((_, idx) => checkedItems[idx])
      .map((project) => project.id);

    // Update savedProjects to include checked projects
    setSavedProjects((prevSavedProjects) => {
      const updatedSavedProjects = new Set(prevSavedProjects);

      // Add new checked projects
      checkedProjectIds.forEach((id) => updatedSavedProjects.add(id));

      // Remove unchecked projects
      prevSavedProjects.forEach((id) => {
        if (!checkedProjectIds.includes(id)) {
          updatedSavedProjects.delete(id);
        }
      });

      return Array.from(updatedSavedProjects);
    });
  }, [checkedItems, projects]); // Run this effect when checkedItems or projects change

  // Handle checkbox change for a specific index
  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  // Update local storage when checkedItems change
  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]); // This effect only runs when checkedItems changes

  // Ensure user navigated to page from dashboard
  if (!user || !user._id) {
    return (
      <div className="title">
        Error! Please sign in and view your projects from your dashboard.
      </div>
    );
  }

  return (
    <div id="my-projs-page">
      <h2 className="title" id="my-projects-title">
        Projects you've created
      </h2>
      <div id="my-projects">
        {projects &&
          user.authoredProjects.map((project, index) => (
            <div key={project._id}>
              <button className="my-project-single">
                <div className="form-check heart-checkbox">
                  <i className="fa-solid fa-trash" id="delete-my-project"></i>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id={`flexCheckDefault_heart_${index}`}
                    checked={!!checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label htmlFor={`flexCheckDefault_heart_${index}`}></label>
                  {project.name}
                </div>
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

/* EXPORT */
export default MyProjects;
