angular.module('dellin', [ ])
  .controller('forms', function($scope) {
    $scope.user = {name: 'abc'};

    $scope.set = function(new__title) {
      this.user.name = new__title;
    }
  });
