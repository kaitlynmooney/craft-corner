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
  mutation addUser(
    $signup_username: String!
    $signup_email: String!
    $signup_password: String!
  ) {
    addUser(
      username: $signup_username
      email: $signup_email
      password: $signup_password
    ) {
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
      _id
      username
      avatar
    }
  }
`;

export const ADD_SURVEYPRICEPOINT = gql`
  mutation addSurveyPricePoint($username: String!, $surveyPricePoint: Int!) {
    addSurveyPricePoint(username: $username, surveyPricePoint: $surveyPricePoint) {
      _id
      username
      surveyPricePoint
    }
  }
 `; 

export const CREATE_PROJECT = gql`
  mutation createProject(
    $name: String!
    $materials: [String]!
    $instructions: [String]!
    $pricePoint: String!
    $difficulty: String!
    $craft: String!
    $authorId: ID!
  ) {
    createProject(
      name: $name
      materials: $materials
      instructions: $instructions
      pricePoint: $pricePoint
      difficulty: $difficulty
      craft: $craft
      authorId: $authorId
    ) {
      _id
      name
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID!) {
    deleteProject(id: $id) {
      _id
      name
    }
  }
`;
