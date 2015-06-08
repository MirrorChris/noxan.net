angular.module("noxan").controller("HomeController", [function () {
  var ctrl = this;

  ctrl.projects = require("./data/projects.json").map(function (project) {
    if (!project.hasOwnProperty("image")) {
      project.image = "//placehold.it/400";
    }
    return project;
  });
}]);

angular.module("noxan").controller("ProjectController", ["$stateParams", "$scope", function ($stateParams, $scope) {
  this.project = $scope.ctrl.projects.filter(function (project) {
    return project.slug === $stateParams.id;
  })[0];
}]);
