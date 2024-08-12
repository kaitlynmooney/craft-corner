const SavedProjects = ({ savedProjects, allProjects }) => {
    return (
        <div id="project-container">
          {savedProjects && savedProjects.length > 0 ? (
            savedProjects.map((projectId) => (
                <div key={projectId}>
                    <button className='button-options'>
                    <div className="form-check">
                        <button type="button" className="btn-close" aria-label="Close"></button>
                        <label>{allProjects.find((p) => p._id === projectId)?.name}</label>
                    </div>
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

