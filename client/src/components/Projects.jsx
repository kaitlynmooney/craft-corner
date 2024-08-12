/* PROJECTS */
const Projects = ({ crafts }) => {
  return (
    <div id="project-container">
    {/*Maps through each individual craft */}
    {crafts?.map((craft, index) => (
      <div key={index}>
      <button className='button-options'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              {craft.name}
            </div>
      </button>
      </div>
      ))}
    </div>
);
}

/* EXPORT */
export default Projects;
