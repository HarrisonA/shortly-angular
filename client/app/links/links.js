var links = angular.module('shortly.links', []);

links.controller('LinksController', ['$scope', '$http', function($scope, $http){
  
  $scope.data = {
    links: [{},{},{}]
  }; 
  
  $scope.init = function (){
    $scope.getLinks();
    console.log('\n\n\nINIT HAS BEEN CALLED\n\n\n');
  };

  $scope.getLinks = function (data){
    console.log('\n\n\nGET LINKS HAS BEEN CALLED\n\n\n');
    $http({
      method: 'GET',
      url: '/api/links'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  };

  // $scope.init();
  $scope.getLinks();


}])



// var app = angular.module('catApp',[])

// app.controller('CatController',['$scope', function($scope){
//     $scope.show = false;
// }])