angular.module('shareYourThoughts')

.controller('MainCtrl', ['$scope', 'postsFactory', function($scope, postsFactory) {

  $scope.posts = postsFactory.posts;

}]);
