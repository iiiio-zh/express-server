'user strict';
var sql = require('../db/db');

var UserProfile = (userProfile) => {
  this.user_id = userProfile.user_id;
  this.contact_message = userProfile.contact_message;
  this.description = userProfile.description;
  this.bio = userProfile.bio;
  this.github = userProfile.github;
  this.project = userProfile.project;
  this.website = userProfile.website;
  this.resume_download_link = userProfile.resume_download_link;
};

UserProfile.getUserProfileByUserId = (userId, result) => {
  sql.query("Select contact_message, description, bio, github, project, website, resume_download_link from user_profile where user_id = ? ", userId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

module.exports = UserProfile;