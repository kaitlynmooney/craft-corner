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
    }
  }
`;

export const QUERY_SINGLE_PROJECT = gql`
query getSingleProject($projectId:ID!){
  project(projectId: $projectId) {
    _id
    name
    materials
    instructions
    pricePoint
    difficulty
  }
`;
