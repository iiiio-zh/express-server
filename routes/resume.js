'use strict';
module.exports = (app) => {
  let resume = require('../controllers/resume_controller');

  app.route('/resumes/:userId')
    .get(resume.read_resume);
};
