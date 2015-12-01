var getStudents = function($scope, $http) {
  $http({
    method: 'GET',
    url: '/students'
  }).then(function successCallback(response) {
    console.log("getStudents success");
    console.log(response.data);
    $scope.students = response.data;
  }, function errorCallback(response) {
    console.log("getStudents failed");
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
    console.log("createStudent failed");
  });
}

var updateStudent = function($http, student) {
  $http({
    method: 'PUT',
    url: '/students/' + student._id,
    data: student
  }).then(function successCallback(response) {
    alert("更新student成功!");
    console.log("updateStudent success");
    console.log(response.data);
  }, function errorCallback(response) {
    console.log("updateStudent failed");
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
    console.log("deleteStudent failed");
  });
}