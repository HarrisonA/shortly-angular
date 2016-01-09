var shorten = angular.module('shortly.shorten', []);

shorten.controller('ShortenController', ['$scope', '$location', 'Links', function ($scope, $location, Links) {
  // Your code here
  $scope.addLink = function(url){
    Links.addLink(url);
  }

  $scope.link = {};

  $scope.url = {
    text: ""
  }

}]);
