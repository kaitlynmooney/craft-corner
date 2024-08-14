import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/itemTypes';

const InProgressProjects = ({ projects, handleDropProject, inProgressProjects, setInProgressProjects }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.PROJECT,
        drop: (item) => handleDropProject(item.project),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    });

    //remove in-progress projects when the X is clicked 
  const handleRemoveProject = (projectId) => {
    // Remove the project ID from inProgress state
    const updatedProjects = inProgressProjects.filter((project) => project._id !== projectId);
    setInProgressProjects(updatedProjects);
    console.log(updatedProjects);

    // Update local storage to remove the project ID
  const storedProjectIds = JSON.parse(localStorage.getItem('inProgressProjects')) || [];
  
  // Filter out the project ID to remove
  const updatedStoredProjectIds = storedProjectIds.filter(project => project._id !== projectId);
  
  // Save the updated list back to local storage
  localStorage.setItem('inProgressProjects', JSON.stringify(updatedStoredProjectIds));
  console.log(updatedStoredProjectIds);
};

    return (
        <div
            ref={drop}
            style={{
                backgroundColor: isOver ? 'lightblue' : 'transparent',
                minHeight: '100px',
                position: 'relative' // Ensure the drop target is positioned correctly
            }}
        >
            <h6>Drop in-progress projects here!</h6>
            <div id="project-container">
                {projects.map((project) => (
                    <button key={project._id} className='button-options'>
                        <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => handleRemoveProject(project._id)}
                        ></button>
                        <label id='label'>{project.name}</label>
                    </button>
                ))}
            </div>
        </div>
    );
    
};

export default InProgressProjects; 