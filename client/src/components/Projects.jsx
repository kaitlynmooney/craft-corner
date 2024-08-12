/* PROJECTS */
import { useState, useEffect } from 'react';

const Projects = ({ user, projects }) => {
  const initialCheckedItems = projects ? new Array(projects.length).fill(false) : [];
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [savedProjects, setSavedProjects] = useState(user?.savedProjects || []);
  const [checkedRecommendedProjects, setCheckedRecommendedProjects] = useState([]);

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
  }, []);

  // Handle checkbox change for a specific index
  const handleCheckboxChange = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);

    const updatedSavedProjects = projects
      .filter((_, idx) => newCheckedItems[idx])
      .map(project => project.id);

    setSavedProjects(updatedSavedProjects);
    setCheckedRecommendedProjects(
      newCheckedItems
        .map((isChecked, idx) => isChecked ? projects[idx].id : null)
        .filter(id => id !== null)
    );
  };

  // Update local storage when checkedItems change
  useEffect(() => {
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [checkedItems]);

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


/* EXPORT */
export default Projects;
