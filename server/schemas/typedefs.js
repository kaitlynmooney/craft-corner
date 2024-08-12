/* TYPEDEFS */
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
  instructions: [String]
  image: String
  pricePoint: String
  difficulty: String
  craft: Craft

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
  allProjects: [Project]
  craft(name: String!): Craft
  crafts: [Craft]
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  changeAvatar(username: String!, avatar: String!): User
  createProject(
    name: String!,
    materials: [String]!,
    instructions: [String]!,
    pricePoint: String!,
    difficulty: String!,
    craft: ID!
  ): Project
  deleteProject(id: ID!): Project
}
`;

/* EXPORT */
module.exports = typeDefs;
