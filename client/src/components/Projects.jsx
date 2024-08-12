/* PROJECTS */
const Projects = ({ crafts }) => {
  return (
    <div id="project-container">
    {/*Maps through each individual craft */}
    {crafts?.map((craft, index) => (
      <div key={index}>
      <button className='button-options'>
      <div className="form-check heart-checkbox">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault_heart"/>
        <label htmlFor="flexCheckDefault_heart"></label>
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
