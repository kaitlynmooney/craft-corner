/* DEPENDENCIES */
import { useLocation } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useState, useEffect } from "react";
import { DELETE_PROJECT } from "../utils/mutations";

/* MY PROJECTS */
const MyProjects = () => {
  const location = useLocation();
  const { user } = location.state || {};
  const projects = user.authoredProjects;

  const [deleteProject] = useMutation(DELETE_PROJECT);
  const [success, setSuccess] = useState("");
  const [curProjectList, setCurProjectList] = useState(projects);

  const initialCheckedItems = projects
    ? new Array(projects.length).fill(false)
    : [];
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [savedProjects, setSavedProjects] = useState(user?.savedProjects || []);

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

    // Get project ID for the changed checkbox
    const projectId = projects[index]._id;

    // Update local storage with the clicked project ID
    const storedProjectIds =
      JSON.parse(localStorage.getItem("checkedProjectIds")) || [];

    if (newCheckedItems[index]) {
      // Add the project ID if it's checked
      if (!storedProjectIds.includes(projectId)) {
        storedProjectIds.push(projectId);
      }
    } else {
      // Remove the project ID if it's unchecked
      const indexToRemove = storedProjectIds.indexOf(projectId);
      if (indexToRemove !== -1) {
        storedProjectIds.splice(indexToRemove, 1);
      }
    }

    // Save updated project IDs to local storage
    localStorage.setItem("checkedProjectIds", JSON.stringify(storedProjectIds));
  };

  // Update local storage when checkedItems change
  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]); // This effect only runs when checkedItems changes

  // Handle deleting a project
  const handleDelete = (projectId) => {
    deleteProject({ variables: { id: projectId } })
      .then((response) => {
        setSuccess(
          "Your project has been deleted successfully! It won't be available to find on the explore page, but any user who has this project saved will still have access to it."
        );

        // Remove the project from the current list
        setCurProjectList((prevList) =>
          prevList.filter((project) => project._id !== projectId)
        );
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };

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
      {success && <p className="success">{success}</p>}
      <div id="my-projects">
        {projects &&
          curProjectList.map((project, index) => (
            <div key={project._id}>
              <button className="my-project-single">
                <div className="form-check heart-checkbox">
                  <i
                    className="fa-solid fa-trash"
                    id="delete-my-project"
                    onClick={() => handleDelete(project._id)}
                  ></i>
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
