import React from 'react';

import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client'; 


import { QUERY_SINGLE_PROJECT } from '../utils/queries'; 

const SingleProjHero =() => {
    const {projectId} = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
        variables : {projectId :projectId},
    });
    console.log(data)
    // console.log(data?.project?.materials)

    const project = data?.project || {};
    console.log(project)

    return(
        <div className="hero">
        <img
          src={`/images/${project.image}`}
          alt="Image of featured project"
          className="hero-image"
        />
        <div className="hero-content">
          <p id="explore-feature">{project.craft.name}</p>
          <div className="featured-craft">
            <h1 id="featured-craft" role="button">
              {project.name}
            </h1>
          </div>
        </div>
      </div>
    );
}

export default SingleProjHero;