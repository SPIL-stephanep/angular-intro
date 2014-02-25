// Initialize your application with the dependencies
var app = angular.module('intro', ['ui.router']);

// Controllers
app.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.pageTitle = 'This is the home page';
    $scope.counter = 0;
    $scope.myInput = 'Two way binding';

    $scope.multiply = function(a, b) {
        console.log(a * b);
    }
}]);

app.controller('FactoryCtrl', ['$scope', 'Portals', function($scope, Portals) {
    $scope.portals = Portals;
}]);

// Factories
app.factory('Portals', function() {
    return [
        {name: 'gamesgames.com', country: 'USA'},
        {name: 'jetztspielen.de', country: 'Germany'},
        {name: 'spelletjes.nl', country: 'NL'},
        {name: 'zapjuegos.com', country: 'Mexico'},
        {name: 'jeux.fr', country: 'France'}
    ];
});

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
        })
        .state('Factories', {
            url: "/factories",
            templateUrl: "/templates/factories.html",
            controller: 'FactoryCtrl'
        })
        // .state('Home', {
        //     url: "/",
        //     templateUrl: "/templates/home.html",
        //     controller: 'HomeCtrl'
        // })
        // .state('Home', {
        //     url: "/",
        //     templateUrl: "/templates/home.html",
        //     controller: 'HomeCtrl'
        // })
        ;

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