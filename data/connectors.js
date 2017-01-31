import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

// create the connection
const db = new Sequelize('workbox', null, null, {
  dialect: 'postgres',
  host: 'localhost'
});

// define the models
const UserModel = db.define('user', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

const ProjectModel = db.define('project', {
  name: { type: Sequelize.STRING },
  active: { type: Sequelize.BOOLEAN },
});

ProjectModel.hasMany(UserModel);
UserModel.belongsTo(ProjectModel);

// create and populate the table with 10 users
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return ProjectModel.create({
      name: casual.title,
      active: casual.boolean,
    }).then((project) => {
      _.times(30, () => {
        return project.createUser({
          firstName: casual.first_name,
          lastName: casual.last_name,
          email: casual.email,
        });
      });
    });
  });
});

// export User, Project
const User = db.models.user;
const Project = db.models.project;

export { User, Project };
