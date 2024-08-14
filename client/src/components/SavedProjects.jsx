import { useDrag } from "react-dnd";
import { useNavigate } from 'react-router-dom';

const SavedProjects = ({
  savedProjects,
  allProjects,
  setSavedProjects,
  handleDropProject,
}) => {
  const handleRemoveProject = (projectId) => {
    // Remove the project ID from saved projects state
    const updatedProjects = savedProjects.filter((_id) => _id !== projectId);
    setSavedProjects(updatedProjects);

    // Update local storage to remove the project ID
    const storedProjectIds =
      JSON.parse(localStorage.getItem("checkedProjectIds")) || [];
    const indexToRemove = storedProjectIds.indexOf(projectId);
    if (indexToRemove !== -1) {
      storedProjectIds.splice(indexToRemove, 1);
      localStorage.setItem(
        "checkedProjectIds",
        JSON.stringify(storedProjectIds)
      );
    }
  };

  const navigate = useNavigate();

  const handleDivClick = (projectId, event) => {
    if (!event.target.classList.contains("btn-close")) {
      // Navigate to the project details page if the close button was not clicked
      navigate(`/project/${projectId}`);
    }
  };

  // Define a draggable project component
  const DraggableProject = ({ project }) => {
    if (project && project.name) {
      console.log(ItemTypes.PROJECT);
      const [{ isDragging }, drag] = useDrag({
        type: "PROJECT",
        item: { project },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });

      const handleDrop = () => {
        handleDropProject(); // Call handleDropProject when a project is dropped
      };

        return (
            <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
                <div onClick={(event) => handleDivClick(project._id, event)}>
                    <button className='button-options'>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => handleRemoveProject(project._id)}></button>
                        <label id='label'>{project.name}</label>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div id="project-container">
            {savedProjects && savedProjects.length > 0 ? (
                savedProjects.map((projectId) => (
                    <DraggableProject key={projectId} project={allProjects.find((p) => p._id === projectId)} />
                ))
            ) : (
                <h6>No saved projects yet!</h6>
            )}
        </div>
      );
    }
  };

export default SavedProjects;
