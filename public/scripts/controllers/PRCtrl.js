/*global angular*/
(function() {
  function PRCtrl(Fixtures, $scope, $q)
  {
    console.log("promise kept", Fixtures.getPublications());
    $scope.exhibitions = Fixtures.pr['Exhibitions'];
    // $scope.publications = Fixtures.pr['Publications'];
    $scope.publications = Fixtures.getPublications();
    Fixtures.getPublications().then(function(published) {$scope.publications = published;}, function(published) { $scope.publications = Fixtures.pr['Publications'] });
  }
  angular
    .module('jessica_site')
    .controller('PRCtrl', ['Fixtures','$scope','$q',PRCtrl]);
})();