angular.module('shareYourThoughts', ['ui.router', 'templates'])

.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

  	// Define states (routes)
  	$stateProvider
  	  .state('home', {
  	  	url: '/home',
  	  	templateUrl: 'home/_home.html',
  	  	controller: 'MainCtrl',
        resolve: {
          postPromise: ['postsFactory', function(postsFactory) {
            return postsFactory.getAll();
          }]
        }
  	  });

  	// Default state to unspecified routes
  	$urlRouterProvider.otherwise('home');

	}
]);
