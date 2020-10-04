'use strict';
module.exports = (app) => {
  let social_media = require('../controllers/social_media_controller');

  app.route('/social_media/:userId')
    .get(social_media.read_social_media);
};

