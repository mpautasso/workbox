import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

// create the connection
const db = new Sequelize('workbox', null, null, {
  dialect: 'postgres',
  host: 'localhost'
});

// define the model
const UserModel = db.define('user', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

// create and populate the table with 10 users
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return UserModel.create({
      firstName: casual.first_name,
      lastName: casual.last_name,
      email: casual.email,
    });
  });
});

// export User
const User = db.models.user;
export { User };
