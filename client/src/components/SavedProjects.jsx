const SavedProjects = ({ savedProjects, allProjects, setSavedProjects }) => {
    const handleRemoveProject = (projectId) => {
        // Remove the project ID from saved projects
        const updatedProjects = savedProjects.filter((_id) => _id !== projectId);
        setSavedProjects(updatedProjects);

        // Update local storage to remove the project ID
        const storedProjectIds = JSON.parse(localStorage.getItem('checkedProjectIds')) || [];
        const indexToRemove = storedProjectIds.indexOf(projectId);
        if (indexToRemove !== -1) {
            storedProjectIds.splice(indexToRemove, 1);
            localStorage.setItem('checkedProjectIds', JSON.stringify(storedProjectIds));
        }
    };

    return (
        <div id="project-container">
          {savedProjects && savedProjects.length > 0 ? (
            savedProjects.map((projectId) => (
                <div key={projectId}>
                    <div className='button-options'>
                        <button type="button" className="btn-close" aria-label="Close" onClick={() => handleRemoveProject(projectId)}></button>
                        <label>{allProjects.find((p) => p._id === projectId)?.name}</label>
                    </div>
                </div>
            ))
          ) : (
            <h4>No saved projects yet!</h4>
          )}
        </div>
    );
}

export default SavedProjects;

