var kittyApp = angular.module("kittyApp",["ngRoute"]);

kittyApp.config(["$routeProvider", function($routeProvider){
  $routeProvider
    .when("/home", {
      templateUrl : "/views/routes/home.html",
      controller: "HomeController"
    })
    .when("/dogs", {
      templateUrl : "/views/routes/dogs.html",
      controller: "DogsController"
    })
    .when("/cats", {
      templateUrl : "/views/routes/cats.html",
      controller: "CatsController"
    })
    .otherwise({
      redirectTo: "home"
    });
}]);

kittyApp.controller("HomeController", ["$scope", function($scope){
  console.log("Some silly console log");
}]);

kittyApp.controller("DogsController", ["$scope", function($scope){
  var dogValue = 5;
  dogValue++;
  console.log("Some silly Dog, ", dogValue);
}]);

kittyApp.controller("CatsController", ["$scope", function($scope){
  console.log("Some silly Cat");
}]);
