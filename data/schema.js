const typeDefinitions = `

type User {
  id: Int
  firstName: String
  lastName: String
  email: String
}

type Query {
  user(firstName: String, lastName: String, email: String): User
  users: [User]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
