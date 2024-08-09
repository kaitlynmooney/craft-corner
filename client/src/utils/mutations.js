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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CHANGE_AVATAR = gql`
  mutation changeAvatar($username: String!, $avatar: String!) {
    changeAvatar(username: $username, avatar: $avatar) {
      user {
        _id
        username
        avatar
      }
    }
  }
`;
