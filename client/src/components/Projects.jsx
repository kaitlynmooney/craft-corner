/* PROJECTS */
const Projects = ({ crafts }) => {
  return (
    <div id="project-container">
    {/*Maps through each individual craft */}
    {crafts?.map((craft, index) => (
      <div key={index}>
      <button className='button-options'>
            {craft.name}
      </button>
      </div>
      ))}
    </div>
);
}

/* EXPORT */
export default Projects;
