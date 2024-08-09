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
