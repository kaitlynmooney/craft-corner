/* PROJECTS */
import { useState } from 'react';

const Projects = ({ crafts }) => {
   // Initialize an array to hold the checked state for each checkbox
   const [checkedItems, setCheckedItems] = useState(new Array(crafts.length).fill(false));

   // Handle checkbox change for a specific index
   const handleCheckboxChange = (index) => {
     const newCheckedItems = [...checkedItems];
     newCheckedItems[index] = !newCheckedItems[index];
     setCheckedItems(newCheckedItems);
   };

   return (
    <div id="project-container">
      {/* Maps through each individual craft */}
      {crafts?.map((craft, index) => (
        <div key={index}>
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
              {craft.name}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

/* EXPORT */
export default Projects;
