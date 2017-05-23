(function() {
  'use strict';

  angular
    .module('todoApp')
    .factory('TasksFactory', TasksFactory);

  TasksFactory.$inject = ['$http', '$q'];

  /* @ngInject */
  function TasksFactory($http, $q) {
    var service = {
      getTasks: getTasks,
      postTasks: postTasks
    };
    return service;

    function getTasks() {
      var defer = $q.defer();
      var url = 'http://localhost:60321/api/todoes';

      console.log(url);
      $http({
          method: "GET",
          url: url
        }) // end of http
        .then(function(response) {
            if (typeof response.data === 'object') {
              console.log(response);
              defer.resolve(response);

            } else {
              defer.reject(response);
            }
          },

          // failure
          function(error) {
            console.log(error);
            defer.reject(error);
          });
      return defer.promise;
    }

    function postTasks(todo) {
      var defer = $q.defer();
      var url = 'http://localhost:60321/api/todoes';

      $http({
          method: 'post',
          data: todo,
          url: 'http://localhost:60321/api/todoes'
        })
        .then(
          function(response) {
            if (typeof response.data === 'object') {
              console.log(response);
              defer.resolve(response);
            } else {
              defer.reject(response);
            }
          },
          function(error) {
            console.log(error);
            defer.resolve(error);
          })
      return defer.promise;
    }
  }
})();
