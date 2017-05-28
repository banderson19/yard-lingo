angular.module('yardLingo', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
          .state('home',{
            url:'/',
            templateUrl: "../views/home.html"
            })
            .state('contact',{
              url:'/contact',
              templateUrl: "../views/contact.html",
            })

      $urlRouterProvider
          .otherwise('/');
    });
