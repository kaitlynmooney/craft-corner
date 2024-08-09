import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client'; 

import { QUERY_SINGLE_PROJECT } from '../utils/queries'; 

const SingleProject = () => {
    const {projectId} = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
        variables : {projectId :projectId},
    });

    const project = data?.project || {};

    if(loading) {
        return <div>Loading Craft Now!</div>;
    }
    return(
        <div>
            
        </div>
    )
}