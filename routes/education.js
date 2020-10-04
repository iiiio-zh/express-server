'use strict';
module.exports = (app) => {
  let education = require('../controllers/education_controller');

  app.route('/education/:resumeId')
    .get(education.read_education);
};

