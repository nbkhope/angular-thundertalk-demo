angular.module('shareYourThoughts')

.controller('MainCtrl', ['$scope', 'postsFactory', function($scope, postsFactory) {

  // Associate posts variable with the posts in the factory object
  $scope.posts = postsFactory.posts;

  // Default ordering for posts
  $scope.postOrder = "-created_at";

  // For the form post information
  $scope.myPost = { content: "", upvotes: 0 };

  // Function to add a new post (through the HTML form)
  $scope.addPost = function() {
    console.log($scope.postForm.$valid);

    // Create the post (also works on the backend)
    //postsFactory.create({ content: $scope.content });
    postsFactory.create($scope.myPost);

    // Clear the form
    $scope.postForm.$setPristine();

    // Reset the variable bound to the form input
    $scope.myPost = { content: "", upvotes: 0 };
  };

  $scope.upvotePost = function(post) {
    postsFactory.upvote(post);
  };

  $scope.orderPosts = function(criterium) {
    switch(criterium) {
      case 'content':
        $scope.postOrder = "content";
        break;
      case 'created_at':
        $scope.postOrder = "-created_at";
        break;
      case 'upvotes':
        $scope.postOrder = "-upvotes";
        break;
      default:
        $scope.postOrder = "-created_at";
    }
  };

}]);
