import { MockList } from 'graphql-tools';
import casual from 'casual';

const mocks = {
  Int: () => casual.integer(1,1000),
  User: () => ({
    firstName: () => casual.first_name,
    lastName: () => casual.last_name,
    email: () => casual.email,
  }),
  Query: () => ({
    author: (o, args) => {
      if (casual.integer(1,10) > 8){
        return null;
      }
      return { ...args };
    },
  }),
};

export default mocks;
