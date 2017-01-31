const typeDefinitions = `
type User {
  id: Int
  firstName: String
  lastName: String
  email: String
  project: Project
}

type Project {
  id: Int
  name: String
  active: Boolean
  users: [User]
}

type Query {
  user(firstName: String, lastName: String, email: String): User
  users: [User]

  project(name: String, active: Boolean): Project
  projects: [Project]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
