// /* TYPEDEFS */
// /* fix later on */
const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  avatar: String
  savedCrafts: [Craft]
  completedProjects: [Project]
  ongoingProjects: [Project]
}

type Project {
  _id: ID
  name:String
  materials: [String]
  instructions: String
  image: String
  pricePoint: String
  diffculty: String
}

type Craft {
  _id : ID
  name: String
  description: String
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  me: User
  project(projectId: ID!): Project
  projects: [Project]
  craft(name: String!): Craft
  crafts: [Craft]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  changeAvatar(username: String!, avatar: String!): User
}
`;

/* EXPORT */
module.exports = typeDefs;
