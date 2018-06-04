(() => {
    angular
      .module("myApp")
      .config(function($routeProvider) {
        $routeProvider
            .when("/welcome", {
            template: "<welcome-component></welcome-component>"
            })
            .when("/gameScreen", {
            template: "<gameScreen-component></gameScreen-component>"
            })
            .otherwise({
            redirectTo: "/welcome"
          });
      })
  })();
  