import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import SingleProjHero from "../components/SingleProjHero";
import SavedArrayButton from '../components/SavedArrayButton';
import { QUERY_SINGLE_PROJECT } from "../utils/queries";

const SingleProject = () => {
  const { projectId } = useParams();
  const { loading, error, data } = useQuery(QUERY_SINGLE_PROJECT, {
    variables: { projectId },
  });

  const project = data?.project || {};

  if (loading) {
    return <div className="loading-spinner"></div>;
  }
  // Handle errors in the query
  if (error) return <div className="error-message">Error: {error.message}</div>;

  

  return (
    <div>
     
      <SingleProjHero />
      <SavedArrayButton projectId= {projectId}/>
      <div className="borders text-decoration-none" id="badge">
        {project.difficulty}
      </div>
      <div className="borders text-decoration-none" id="badge">
        {project.pricePoint}
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="project-image borders "
              src={`/images/${project.image}`}
              alt="Selected projects photo"
            ></img>
          </div>

          <div className="col order-1 ">
            <h1 className="title line-buffers">Materials</h1>

            {project.materials.map((material, index) => (
              <ul
                className=" inter project-instructions materials-list"
                key={index}
              >
                <li>
                  <input type="checkbox"></input> {material}
                </li>
              </ul>
            ))}
            <h2 className="title line-buffers">Instructions</h2>

            {project.instructions.map((instruction, index) => (
              <ul
                className="inter project-instructions materials-list"
                key={index}
              >
                <li>{instruction}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
