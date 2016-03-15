// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ToDo', ['ionic', 'LocalStorageModule']);
app.config(function(LocalStorageServiceProvider) {
  LocalStorageServiceProvider
  .setPrefix('todo');
});

app.controller('main', function($scope, $ionicModal, LocalStorageService) {
  $scope.tasks = [];

  $scope.task = {};

  $ionicModal.fromTemplateUrl('new-task-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.newTaskModal = modal;
  });

  $scope.getTasks = function() {
    if (LocalStorageService.get(taskData)) {
      $scope.tasks = LocalStorageService.get(taskData);
    } else {
      $scope.tasks = [];
    }
  }

  $scope.createTask = function() {
    $scope.tasks.push($scope.task);
    LocalStorageService.set(taskData, $scope.tasks);
    $scope.task = {};
    $scope.newTaskModal.hide();
  }

  $scope.removeTask = function () {
    $scope.tasks.splice(index, 1);
    LocalStorageService.set(taskData, $scope.tasks);
  }
  $scope.completeTask = function() {
    if (index !== -1) {
      $scope.tasks[index].completed = true;
    }
    LocalStorageService.set(taskData, $scope.tasks);
  }
})

