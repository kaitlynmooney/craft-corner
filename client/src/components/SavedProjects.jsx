const SavedProjects = ({ savedProjects }) => {
     
    return (
        <div id="project-container">
          {savedProjects && savedProjects.length > 0 ? (
            savedProjects.map((projectId) => (
                <div key={projectId}>
                <button className='button-options'>
                  <button type="button" className="btn-close" aria-label="Close"></button>
                  <label>{projectId.name}</label>
                </button>
              </div>
            ))
          ) : (
            <h4>No saved projects yet!</h4>
          )}
        </div>
    );
}

export default SavedProjects; 