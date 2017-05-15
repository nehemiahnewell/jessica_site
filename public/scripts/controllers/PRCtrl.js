/*global angular*/
(function() {
  function PRCtrl(Fixtures, $scope, $q)
  {
    Fixtures.getExhibitions().then(function(exhibited) {$scope.exhibitions = exhibited;}, function(exhibited) { $scope.publications = Fixtures.pr['Exhibitions'] });
    Fixtures.getPublications().then(function(published) {$scope.publications = published;}, function(published) { $scope.publications = Fixtures.pr['Publications'] });
  }
  angular
    .module('jessica_site')
    .controller('PRCtrl', ['Fixtures','$scope','$q',PRCtrl]);
})();