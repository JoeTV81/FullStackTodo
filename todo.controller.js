
(function() {
  'use strict';

  angular
    .module('todoApp')
    .controller('toDoController', toDoController);

  toDoController.$inject = [];

  /* @ngInject */
  function toDoController() {
    var vm = this;
    vm.list = [];
    // click function
    vm.addtoDo = function() {
      vm.list.push({
        todo: vm.toDoObject.todoListInput,
        Priority: vm.toDoObject.priorityList
      });
      //console to verify
      console.log(vm.toDoObject);
    }
  }
})();
