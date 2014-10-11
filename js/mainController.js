var app = angular.module("ngAssessment");

app.controller('MainController', function($scope, mainService){

	$scope.header = 'MetaSean\'s Temporal To Do Page';

	$scope.tasks = mainService.getTasks();

	$scope.submitNewTask = function() {
		mainService.addTask($scope.newTask);
	};

	$scope.updateTaskStatus = function() {
		mainService.updateTaskStatus($scope.task);
	};

});