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
        
        <div>
             <h1>{project.name}</h1>
            <SingleProjHero />
            <div>
            {project.materials.map((material, index) => (
            <ul key ={index}>
                <li>{material}</li>
            </ul>
          ))}


          <div>
            <img src={`/images/${project.image}`} alt="Selected projects photo"></img>
          </div>

    
               
            </div>
           
                
                <p>{project.instructions}</p>

        </div>
    )
}

export default SingleProject;