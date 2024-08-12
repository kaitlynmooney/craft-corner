import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client'; 

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
            <div><img></img></div>
            <div>
                <div>
                    {/* <btn>Price Point: {project.pricePoint}</btn>
                    <btn>Skill Level : {project.difficulty}</btn> */}
                    </div>
                
                <h1>{project.name}</h1>
                <p>{project.instructions}</p>
            </div>

        </div>
    )
}

export default SingleProject;