var app = angular.module("ngAssessment");

app.factory("mainService", function() {

	var toDoList = [{
							status: false,
							text: "Complete the To Do app"
						},{
							status: true,
							text: "completed todo task"
						},{
							status: false,
							text: "incomplete todo task"
						}];

	return{

		getTasks: function() {
			return toDoList;
		},

		addTask: function (newTask) {
			toDoList.push({status: false,
								text: newTask});
		},

		updateTaskStatus: function (task) {
			for (var toDo in toDoList) {
				if (toDo == task) {
					toDo = task;
				}
			};
		}

	};

});