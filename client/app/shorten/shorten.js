var shorten = angular.module('shortly.shorten', []);

shorten.controller('ShortenController', ['$scope', '$location', 'Links', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = function(){
    Links.addLink();
  }

  $scope.link = {};

}]);
