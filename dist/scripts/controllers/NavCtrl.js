/*global angular*/
(function() {
  function NavCtrl($scope, $rootScope, $location, $state) {
    this.navigation = $state.get().filter(function(linkedState)
    {
        return 'params' in linkedState;
    });
	
	this.here = $location.path();
	this.travel = function(link)
	{
	    $location.path(link);
	    this.here = $location.path();
	    console.log(this.here);
	};
	$rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
       this.here = $location.path();
    });
  }
  angular
    .module('jessica_site')
    .controller('NavCtrl', ['$scope', '$rootScope', '$location','$state', NavCtrl]);
})();