//1. get links from user's get request
//2. list those links from $scope.data
//3. render links in list on links.html
//? store links to database




var links = angular.module('shortly.links', []);

links.controller('LinksController', ['$scope', 'Links', function($scope, Links){
  
  $scope.data = {
    //links: [{},{},{}]
    //links: Links.linkStorage
    links: []
  }; 
  
  // $scope.getLinks = Links.getLinks;

  $scope.init = function (){
    // $scope.getLinks();
    console.log('\n\n\nINIT HAS BEEN CALLED\n\n\n');
  };

  // $scope.getLinks = function (data){
  //   console.log('\n\n\nGET LINKS HAS BEEN CALLED\n\n\n');
  //   $http({
  //     method: 'GET',
  //     url: '/api/links'
  //   }).then(function successCallback(response) {
  //     console.log("the response is: ", response)
  //     for (var i=0; i<response.data.length; i++){
  //       $scope.data.links.push(response.data[i]);
  //     }

  //       // this callback will be called asynchronously
  //       // when the response is available
  //     }, function errorCallback(response) {
  //       // called asynchronously if an error occurs
  //       // or server returns response with an error status.
  //     });
  // };
  //console.log("\n\n\nour links instantiation: ", Links, "\n\n");
  // $scope.init();
  
  $scope.getLinks = function(){
    Links.getLinks().then(function (dataPassedFromFactory){
      $scope.data.links = dataPassedFromFactory;
      console.log("\n\n\none of the links objects: ", dataPassedFromFactory[0]);
      console.log($scope.data.links);


    });
  }

  $scope.getLinks();

  // .then(function successCallback(response) {
      // $scope.data = Links.linkStorage;
      // }, function errorCallback(response) {
     

        // called asynchronously if an error occurs
        // or server returns response with an error status.
      // });

  //console.log("\n\n contents of $scope.data: ", $scope.data);

  // $scope.saveLinks = function(){
  //   for (var i=0; i<Links.linkStorage.length; i++){
  //     $scope.data.links.push(Links.linkStorage[i]);
  //   }
  // }
  // $scope.saveLinks();

}])



// var app = angular.module('catApp',[])

// app.controller('CatController',['$scope', function($scope){
//     $scope.show = false;
// }])