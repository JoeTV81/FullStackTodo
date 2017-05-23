
(function() {
  'use strict';

  angular
    .module('todoApp')
    .controller('toDoController', toDoController);

  toDoController.$inject = ['TasksFactory'];

  /* @ngInject */
  function toDoController(TasksFactory) {
    var vm = this;
    vm.list = [];
    // click function
    vm.addtoDo = function() {
      //Defining the date and time variable
    var date = new Date();
//.toLocaleString() adds the current date and time
    var todaysDateTime = date.toLocaleString();
    vm.toDoObject.CreateDate = todaysDateTime;

      TasksFactory.postTasks(vm.toDoObject)
      .then(function(response){
        console.log(response);
        addToDoToArray(response.data);
      },function(error){
        //console to verify
        console.log(error);
      })
    }
    function addToDoToArray(todo) {
      vm.list.push({
        todo: todo.name,
        Priority: todo.text
      });
  }
  }

})();
