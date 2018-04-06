
// app.js
var app = angular.module('firstApp', []);


// controller.js
var app = angular.module('firstApp');
app.controller('FirstController', ['$scope', function ($scope) {
    $scope.name = 'Max';
    $scope.names = ['Max', 'Pelle', 'Calle'];
}]);












