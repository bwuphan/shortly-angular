angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $location, $window, Links) {
  console.log('LINKS ARE', Links);
  $scope.data = {};

  Links.getAll()
    .then(function(links) {
      console.log('LINKS DATA IS', links)
      console.log('LINKS INSIDE ARE ', links);
      $scope.data.links = links;
    });
});
