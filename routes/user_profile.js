'use strict';
module.exports = (app) => {
  let user_profiles = require('../controllers/user_profile_controller');

  app.route('/user_profiles/:userId')
    .get(user_profiles.read_a_user_profile);
};

