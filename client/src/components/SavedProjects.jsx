const SavedProjects = ({ savedProjects }) => {
     
    return (
        <div id="project-container">
          {savedProjects && savedProjects.length > 0 ? (
            savedProjects.map((project) => (
                <div key={project.id}>
                <button className='button-options'>
                  <button type="button" className="btn-close" aria-label="Close"></button>
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