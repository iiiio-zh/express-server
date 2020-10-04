'use strict';
module.exports = (app) => {
  let projects = require('../controllers/project_controller');

  app.route('/projects/:userId')
    .get(projects.read_projects);
};

