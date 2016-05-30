angular.module('shareYourThoughts')

.factory('postsFactory', ['$http', function($http) {

  // the factory object
  var o = {
    posts: []
  };

  return o;

}]);
