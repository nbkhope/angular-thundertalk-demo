angular.module('shareYourThoughts')

.controller('MainCtrl', ['$scope', 'postsFactory', function($scope, postsFactory) {

  // Associate posts variable with the posts in the factory object
  $scope.posts = postsFactory.posts;

  // Function to add a new post (through the HTML form)
  $scope.addPost = function() {
    console.log($scope.postForm.$valid);

    // Create the post (also works on the backend)
    postsFactory.create({ content: $scope.content });

    // Clear the form
    $scope.postForm.$setPristine();
  };

}]);
