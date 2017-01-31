import { User, Project } from './connectors';

// create the resolve functions for the available GraphQL queries
const resolvers = {

  Query: {
    user(_, args) {
      return User.find({ where: args });
    },

    users(_, args) {
      return User.findAll({where: args});
    },

    project(_, args) {
      return Project.find({ where: args });
    },

    projects(_, args) {
      return Project.findAll({where: args});
    }
  },

  User: {
    project(user) {
      return user.getProject();
    },
  },

  Project: {
    users(project) {
      return project.getUsers();
    },
  },

};

export default resolvers;
