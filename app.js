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


})

// SERVICES
myApp.service('nameService', function(){
    
    var self = this;

    this.name = 'Corey Ghilarducci';

    this.namelength = function(){
        return self.name.length;
    }

})

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$log', "nameService", function ($scope, $log, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function(){

        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());

}]);

myApp.controller('secondController', ['$scope', '$log', "$routeParams", "nameService", function ($scope, $log, $routeParams, nameService) {

    $scope.name = nameService.name;

    $scope.$watch('name', function(){

        nameService.name = $scope.name;
        
    });

    $scope.num = $routeParams.num || 1;

    $log.second = "Property from second";
    $log.log($log);

}]);