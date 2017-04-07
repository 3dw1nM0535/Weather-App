var app = angular.module('directive', []);
app.controller('directiveController', ['$scope', function($scope) {
 $scope.message = 'This is the Custom directive message';
}]);

app.directive('myDirectiveMessage', function() {
 return {
  templateUrl: 'my-directive-message.html';
 };
});
