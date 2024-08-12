import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import SingleProjHero from '../components/SingleProjHero';
import { QUERY_SINGLE_PROJECT } from '../utils/queries'; 

const SingleProject = () => {
  const { projectId } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId },
  });

  // Display a loading spinner while the query is loading
  if (loading) return <div className="loading-spinner">Loading...</div>;

  // Handle errors in the query
  if (error) return <div className="error-message">Error: {error.message}</div>;

  const project = data?.project || {};

  // Ensure materials and instructions are defined and are arrays
  const materials = Array.isArray(project.materials) ? project.materials : [];
  const instructions = Array.isArray(project.instructions) ? project.instructions : [];

  return (
    <div className="container">
      <SingleProjHero />
      <div className="row">
        <div className="col">
          {project.image && (
            <img
              className="project-image borders"
              src={`/images/${project.image}`}
              alt="Selected project's photo"
            />
          )}
        </div>
        <div className="col order-1">
          <h1 className="title line-buffers">Materials</h1>
          {materials.length > 0 ? (
            <ul className="inter project-instructions materials-list">
              {materials.map((material, index) => (
                <li key={index}>
                  <input type="checkbox" />
                  {material}
                </li>
              ))}
            </ul>
          ) : (
            <p>No materials available.</p>
          )}

          <h2 className="title line-buffers">Instructions</h2>
          {instructions.length > 0 ? (
            <ul className="inter project-instructions materials-list">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          ) : (
            <p>No instructions available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;

