var app = angular.module('app', []);

app.controller('MainCtrl', function($scope, $http, $window) {
  getStudents($scope, $http);

  $scope.add = function () {
    createStudent($http, $scope.new_student);
    $window.location.reload();
  };

});

app.controller('DetailCtrl', function($scope, $http, $window) {
  $scope.update = function() {
    updateStudent($http, $scope.student);
  };

  $scope.delete = function() {
    deleteStudent($http, $scope.student._id);
    $window.location.reload();
  };
});
