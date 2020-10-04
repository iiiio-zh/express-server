'use strict';
module.exports = (app) => {
  let work = require('../controllers/work_controller');

  app.route('/work/:resumeId')
    .get(work.read_works);
};
