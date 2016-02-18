'use strict';

angular.module('collaby.whiteboard', [])

.controller('WhiteboardController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.collaby', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.collaby', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});