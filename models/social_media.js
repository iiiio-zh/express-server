'user strict';
var sql = require('../db/db');

var SocialMedia = (socialMedia) => {
  this.user_id = socialMedia.user_id;
  this.details = socialMedia.details;
};

SocialMedia.getAllUserSocialMediaByUserId = (userId, result) => {
  sql.query("Select details from social_media where user_id = ? ", userId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

module.exports = SocialMedia;