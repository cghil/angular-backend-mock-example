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
myApp.controller('mainController', ['$scope', '$log', "nameService", function ($scope, $log, nameService) {



}]);

myApp.controller('secondController', ['$scope', '$log', "$routeParams", "nameService", function ($scope, $log, $routeParams, nameService) {

   

}]);

myApp.directive("searchResult", function(){
    return {
        template: '<a href="#" class="list-group-item"> <h4 class="list-group-item-heading">Doe, John</h4> <p class="list-group-item-text">555 Camino Las Ramblas Thousand Oaks, CA 94408</p></a>',
        replace: true
    }
});