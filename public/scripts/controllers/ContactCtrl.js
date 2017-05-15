/*global angular*/
(function() {
  function ContactCtrl($scope, $http, $state)
  {
    $scope.submitForms;
    $scope.sendOn = function()
    {
      $http.post('/contact', {
        "name": $scope.submitForms.name,
        "mail": $scope.submitForms.mail,
        "comment" : $scope.submitForms.comment,
      });
      $state.reload();
    };
  }
  angular
    .module('jessica_site')
    .controller('ContactCtrl', ['$scope','$http','$state',ContactCtrl]);
})();