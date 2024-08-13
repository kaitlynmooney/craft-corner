import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query QUERY_ME {
    me {
      _id
      email
      password
      username
      avatar
      completedProjects {
        _id
        name
      }
      ongoingProjects {
        _id
        name
      }
      authoredProjects {
        _id
        name
      }
      savedCrafts {
        _id
        name
      }
      surveyPricePoint
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query Query($projectId: ID!) {
    project(projectId: $projectId) {
      name
      _id
      materials
      pricePoint
      instructions
      difficulty
      image
      craft {
        name
        description
      }
    }
  }
`;

export const QUERY_ALL_PROJECTS = gql`
  query {
    allProjects {
      _id
      name
      materials
      instructions
      pricePoint
      difficulty
    }
  }
`;
export const QUERY_ALL_PROJECTS_CRAFTS = gql`
  query {
    allProjects {
      _id
      name
      materials
      instructions
      pricePoint
      difficulty
      craft {
        name
      }
    }
  }
`;
