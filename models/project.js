'user strict';
var sql = require('../db/db');

var Project = (project) => {
  this.user_id = project.user_id;
  this.title = project.title;
  this.category = project.category;
  this.image_path = project.image_path;
  this.url = project.url;
};

Project.getAllProjectsByUserId = (userId, result) => {
  sql.query("Select title, category, image_path, url from project where user_id = ? ", userId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);

      }
    });
};

module.exports = Project;