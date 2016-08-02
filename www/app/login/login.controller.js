angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicPopup, loginService) {
  $scope.user = {
    username: '',
    password: ''
  }

  $scope.login = function(){
    console.log('LOGIN user: ' + $scope.user.username + ' Password: ' + $scope.user.password);

    /*  loginService.loginUser($scope.user.username, $scope.user.password).success(function(data) {
            $state.go('new');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
        */
  }
});
