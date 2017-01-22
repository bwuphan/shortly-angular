angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, $window, Links) {
  // Your code here

  console.log('LINKS ARE', Links);
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link);
      // .then(function(link) {
      //   console.log('LINKS INSIDE ARE ', link);
        // $scope.data.links = link;
  };

});
