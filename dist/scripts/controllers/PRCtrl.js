/*global angular*/
(function() {
  function PRCtrl(Fixtures)
  {
    this.exhibitions = Fixtures.pr['Exhibitions'];
    this.publications = Fixtures.pr['Publications'];
  }
  angular
    .module('jessica_site')
    .controller('PRCtrl', ['Fixtures',PRCtrl]);
})();