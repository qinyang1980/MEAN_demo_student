var app = angular.module('app', []);

var getStudents = function($scope, $http) {
  $http({
    method: 'GET',
    url: '/students'
  }).then(function successCallback(response) {
    console.log("getStudents success");
    console.log(response.data);
    $scope.students = response.data;
  }, function errorCallback(response) {
    console.log("failed");
  });
};

var createStudent = function($http, student) {
  $http({
    method: 'POST',
    url: '/students',
    data: student
  }).then(function successCallback(response) {
    console.log("createStudent success");
    console.log(response.data);
  }, function errorCallback(response) {
    console.log("failed");
  });
}

var updateStudent = function($http, student) {
  //var studentID = '/students/' + student._id;
  $http({
    method: 'PUT',
    url: '/students/' + student._id,
    data: student
  }).then(function successCallback(response) {
    console.log("updateStudent success");
    console.log(response.data);
  }, function errorCallback(response) {
    console.log("failed");
  });
}

var deleteStudent = function($http, id) {
  $http({
    method: 'DELETE',
    url: '/students/' + id
  }).then(function successCallback(response) {
    console.log("deleteStudent success");
    console.log(response.data);
  }, function errorCallback(response) {
    console.log("failed");
  });
}

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
