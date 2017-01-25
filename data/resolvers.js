import { User } from './connectors';

// create the resolve functions for the available GraphQL queries
const resolvers = {

  Query: {
    user(_, args) {
      return User.find({ where: args });
      // return { id: 1, firstName: 'Bob', lastName: 'Marley', email: 'bob.marley@gmail.com' };
    },

    users(_, args) {
      return User.findAll({where: args});
    }
  },

};

export default resolvers;
