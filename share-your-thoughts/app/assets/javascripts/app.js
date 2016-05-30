angular.module('shareYourThoughts', ['ui-router'])

.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
  	
  	// Define states (routes)
  	$stateProvider
  	  .state('index', {
  	  	url: '/',
  	  	templateUrl: 'home/_home.html',
  	  	controller: 'MainCtrl',
  	  });

  	// Default state to unspecified routes
  	$urlRouterProvider.otherwise('index');

	}
]);
