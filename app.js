// MODULE
var myApp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngMockE2E']);

// CONTROLLERS
myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $http.get('/rules')
        .success(function(response){
            $scope.rules = response;
        })
        .error(function(data, status){
            console.log(data);
        });

    $scope.newRule = '';

    $scope.addRule = function(){
        $http.post('/rules', { rulename: $scope.newRule })
            .success(function(result){

                console.log(result);
                $scope.rules = result;
                $scope.newRule = '';

            })
            .error(function(data, status){

                console.log(data);
            });

    }
}]);