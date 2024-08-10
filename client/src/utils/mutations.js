import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($login_email: String!, $login_password: String!) {
    login(email: $login_email, password: $login_password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($signup_username: String!, $signup_email: String!, $signup_password: String!) {
    addUser(username: $signup_username, email: $signup_email, password: $signup_password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
