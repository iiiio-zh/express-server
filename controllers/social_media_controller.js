'use strict';

var socialMedia = require('../models/social_media');

exports.read_social_media = (req, res) => {
  socialMedia.getAllUserSocialMediaByUserId(req.params.userId, (err, task) => {
    if (err)
      res.send(err);
    res.json(task);
  });
};



