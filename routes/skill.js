'use strict';
module.exports = (app) => {
  let skills = require('../controllers/skill_controller');

  app.route('/skills/:resumeId')
    .get(skills.read_skills);
};

