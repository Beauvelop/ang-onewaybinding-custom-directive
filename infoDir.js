angular.module('myApp')
  .directive('infoDir', function() {
    return {
      templateUrl: "./infoDir.html",
      scope: {
        name: '<'
      },
      controller: function($scope) {
        $scope.name = 'Bill Smith';
      }
    }
  })
