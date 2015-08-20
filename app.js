// MODULE
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});


// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.person = {
        name: 'Jane Doe',
        address: '555 Camino Las Ramblas Thousand Oaks, CA 94408'
    }

}]);

myApp.controller('secondController', ['$scope', '$log', "$routeParams", function ($scope, $log, $routeParams) {

   

}]);

myApp.directive("searchResult", function(){
    return {
        templateUrl: 'directives/searchresult.html',
        replace: true
    }
});