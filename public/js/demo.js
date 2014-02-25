// Initialize your application with the dependencies
var app = angular.module('intro', ['ui.router']);

// Controllers
app.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.pageTitle = 'This is the home page';
}]);

// Setup the view routes
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    // Re-route to home page if needed
    $urlRouterProvider.otherwise('/');

    $stateProvider
        // Home Page
        .state('Home', {
            url: "/",
            templateUrl: "/templates/home.html",
            controller: 'HomeCtrl'
        });

    $locationProvider.hashPrefix('!');
});

// define globals
app.run(function($rootScope) {
    $rootScope.title = 'Angular.js Intro course';
});

// bootstrap the application on domReady
angular.element(document).ready(function() {
    angular.bootstrap(document, ['intro']);
});