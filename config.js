(() => {
    angular
      .module("myApp")
      .config(function($routeProvider) {
        $routeProvider
            .when("/welcome", {
            template: "<welcome-component></welcome-component>"
            })
            .when("/gameScreen", {
            template: "<main-component></main-component>"
            })
            .otherwise({
            redirectTo: "/welcome"
          });
      })
  })();
  