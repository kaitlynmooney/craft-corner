/* PROJECTS */
import { useState, useEffect } from 'react';

const Projects = ({ user, projects }) => {
  const initialCheckedItems = projects ? new Array(projects.length).fill(false) : [];
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [savedProjects, setSavedProjects] = useState(user?.savedProjects || []);

  // Load checkbox state from local storage on component mount
  useEffect(() => {
    try {
      const storedCheckedItems = JSON.parse(localStorage.getItem('checkedItems'));
      if (Array.isArray(storedCheckedItems)) {
        setCheckedItems(storedCheckedItems);
      }
    } catch (error) {
      console.error('Failed to load checked items from local storage:', error);
    }
  }, []); // This effect only runs once on mount

  // Update savedProjects when checkedItems change
  useEffect(() => {
    // Gather checked project IDs
    const checkedProjectIds = projects
      .filter((_, idx) => checkedItems[idx])
      .map(project => project.id);

    // Update savedProjects to include checked projects
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
  };

  // Update local storage when checkedItems change
  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]); // This effect only runs when checkedItems changes

  return (
    <div id="project-container">
      {projects && projects.map((project, index) => (
        <div key={project.id}>
          <button className='button-options'>
            <div className="form-check heart-checkbox">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id={`flexCheckDefault_heart_${index}`}
                checked={checkedItems[index]}
                onChange={() => handleCheckboxChange(index)}
              />
              <label htmlFor={`flexCheckDefault_heart_${index}`}></label>
              {project.name}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
