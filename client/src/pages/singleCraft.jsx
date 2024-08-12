import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client'; 

import SingleProjHero from '../components/SingleProjHero';

import { QUERY_SINGLE_PROJECT } from '../utils/queries'; 

const SingleProject = () => {
    const {projectId} = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
        variables : {projectId :projectId},
    });
    console.log(data)
    // console.log(data?.project?.materials)

    const project = data?.project || {};

    if(loading) {
        return <div>Loading Craft Now!</div>;
    }
    return(
        
        <div className="container">
             
            <SingleProjHero />

            

            <div className="row">

        


          <div className="col">
            <img className="project-image borders "  src={`/images/${project.image}`} alt="Selected projects photo"></img>
          </div>

          <div className="col order-1 ">
          <h1 className="title line-buffers">Materials</h1>

          {project.materials.map((material, index) => (
            <ul className="project-instructions materials-list" key ={index}>
                <li><input type="checkbox"></input> {material}</li>
            </ul>
             ))}
           <h2 className="title line-buffers">Instructions</h2>
              <p className="inter project-instructions">{project.instructions}</p>

          </div>
          
         

          


          



    
               
            </div>
           
                
               

        </div>
    )
}

export default SingleProject;