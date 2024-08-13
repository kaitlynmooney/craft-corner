/* PROJECTS */
import { useState, useEffect } from 'react';

const Projects = ({ user, projects }) => {
  const initialCheckedItems = projects ? new Array(projects.length).fill(false) : [];
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [savedProjects, setSavedProjects] = useState(user?.savedProjects || []);

  
  // Update savedProjects when checkedItems change
  useEffect(() => {
    const checkedProjectIds = projects
      .filter((_, idx) => checkedItems[idx])
      .map(project => project.id);

    setSavedProjects(prevSavedProjects => {
      const updatedSavedProjects = new Set(prevSavedProjects);

      // Add new checked projects
      checkedProjectIds.forEach(id => updatedSavedProjects.add(id));

      // Remove unchecked projects
      prevSavedProjects.forEach(id => {
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
    const storedProjectIds = JSON.parse(localStorage.getItem('checkedProjectIds')) || [];

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
    localStorage.setItem('checkedProjectIds', JSON.stringify(storedProjectIds));
  };

  // Update local storage when checkedItems change
  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]); // This effect only runs when checkedItems changes

  return (
    <div id="project-container">
      {projects && projects.map((project, index) => (
        <div key={project._id}>
          <a href={`/project/${project._id}`}>
          <button className='button-options'>
            <div className="form-check heart-checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={`flexCheckDefault_heart_${project._id}`} // Use project.id for unique ID
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={`flexCheckDefault_heart_${project._id}`}>
                {project.name}
              </label>
            </div>
          </button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
