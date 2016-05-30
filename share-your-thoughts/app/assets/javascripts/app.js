angular.module('shareYourThoughts', ['ui.router', 'templates'])

.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
  	
  	// Define states (routes)
  	$stateProvider
  	  .state('index', {
  	  	url: '/index',
  	  	templateUrl: 'home/_home.html',
  	  	controller: 'MainCtrl',
  	  });

  	// Default state to unspecified routes
  	$urlRouterProvider.otherwise('index');

	}
]);
