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
	    console.log(this.here, $location.path());
	    if(this.here === $location.path() && this.here == "/")
	    {
	      $state.go($state.current, {}, {reload: true});
	    }
	    else
	    {
	      this.here = $location.path();
	    }
	};
	$rootScope.$on('$routeChangeSuccess', function(e, curr, prev) {
       this.here = $location.path();
    });
  }
  angular
    .module('jessica_site')
    .controller('NavCtrl', ['$scope', '$rootScope', '$location','$state', NavCtrl]);
})();