/*global angular*/
(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        $stateProvider
        .state('galleries', {
            url: '/',
            params: {
                linkName: "Galleries",
            },
            controller:"GalleriesCtrl as galleries",
            templateUrl: '/templates/galleries.html'
        })
        .state('biography', {
            url: '/biography',
            params: {
                linkName: "Biography",
            },
            templateUrl: '/templates/biography.html'
        })
        .state('pr', {
            url: '/exhibitions_and_publications',
            params: {
                linkName: "Exhibitions and Publications",
            },
            controller:"PRCtrl as pr",
            templateUrl: '/templates/pr.html'
        })
        .state('contact', {
            url: '/contact',
            params: {
                linkName: "Contact",
            },
            templateUrl: '/templates/contact.html'
        });
    }
  angular
    .module('jessica_site', ['ui.router'])
    .config(config);
})();


                    
                    
                    
                    
                    
                    
                    