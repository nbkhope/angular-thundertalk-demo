angular.module('shareYourThoughts')

.factory('postsFactory', ['$http', function($http) {

  // the factory object
  var o = {
    posts: []
  };

  o.getAll = function() {
    return $http.get('/posts.json').success(function(data) {
      angular.copy(data, o.posts);
    });
  };

  // return the factory object
  return o;

}]);
