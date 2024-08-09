// /* TYPEDEFS */
// /* fix later on */
const typeDefs = `

type User {
  _id: ID
  username: String
  email: String
  password: String
  avatar: String
}
type Project {
    _id: ID
    name:String
    materials:Array
    instructions:String
    image:String
    pricePoint:String
    diffculty: String

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

}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
}
`;

/* EXPORT */
module.exports = typeDefs;
