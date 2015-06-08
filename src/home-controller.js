angular.module("noxan").controller("HomeController", [function () {
  var ctrl = this;

  ctrl.projects = require("./data/projects.json").map(function (project) {
    if (!project.hasOwnProperty("image")) {
      project.image = "//placehold.it/400";
    }
    return project;
  });
}]);