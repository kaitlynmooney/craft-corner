/* PROJECTS */
import { useState } from 'react';

const Projects = ({ user, projects }) => {
  const initialCheckedItems = projects ? new Array(projects.length).fill(false) : [];
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [savedProjects, setSavedProjects] = useState(user?.savedProjects || []);

  // Handle checkbox change for a specific index
  const handleCheckboxChange = (index) => {
   const newCheckedItems = [...checkedItems];
   newCheckedItems[index] = !newCheckedItems[index];
   setCheckedItems(newCheckedItems);

   if (projects && projects[index]) {
     const projectId = projects[index].id;
     if (newCheckedItems[index]) {
       setSavedProjects([...savedProjects, projectId]);
     } else {
       setSavedProjects(savedProjects.filter((id) => id !== projectId));
     }
   }
 };

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
