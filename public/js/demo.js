// Initialize your application with the dependencies
var app = angular.module('intro', ['ui.router']);

// Controllers
app.controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.pageTitle = 'This is the home page';
    $scope.counter = 0;
    $scope.myInput = 'Two way binding';

    $rootScope.title ='title for home page';

    $scope.multiply = function(a, b) {
        console.log(a * b);
    }

    $scope.today = new Date();
}]);

app.controller('FactoryCtrl', ['$scope', 'Portals', function($scope, Portals) {
    $scope.portals = Portals;
}]);

app.controller('DirectivesCtrl', ['$scope', function($scope) {
    $scope.spanClass = '';
}]);

app.controller('FiltersCtrl', ['$scope', function($scope) {
    $scope.message = '';
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

// Directives
app.directive('overthespan', function() {
    // return function(scope, element, attrs) {
    //     element.bind('mouseenter', function() {
    //         scope.$apply(function() {
    //             scope.spanClass = attrs.overthespan;
    //         });
    //     });

    //     element.bind('mouseout', function() {
    //         scope.$apply(function() {
    //             scope.spanClass = '';
    //         });
    //     });
    // }
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('mouseenter', function() {
                scope.$apply(function() {
                    scope.spanClass = attrs.overthespan;
                });
            });

            element.bind('mouseout', function() {
                scope.$apply(function() {
                    scope.spanClass = '';
                });
            });
        }
    };
});

app.directive('blog', function() {
    return {
        restrict: 'E',
        template: '<h2>i am a blog</h2>'
    }
});

// Filters
app.filter('reversed', function() {
    return function(text) {
        return text.split("").reverse().join("");
    }
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
        .state('Directives', {
            url: "/directives",
            templateUrl: "/templates/directives.html",
            controller: 'DirectivesCtrl'
        })
        .state('Filters', {
            url: "/filters",
            templateUrl: "/templates/filters.html",
            controller: 'FiltersCtrl'
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