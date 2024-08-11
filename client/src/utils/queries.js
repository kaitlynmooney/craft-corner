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
      savedCrafts {
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
  query getSingleProject($projectId: ID!) {
    project(projectId: $projectId) {
      _id
      name
      materials
      instructions
      pricePoint
      difficulty
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
