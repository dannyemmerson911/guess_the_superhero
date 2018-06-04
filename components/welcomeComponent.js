(function(){
    const welcomeComponent = {
        templateUrl: '/partials/welcome.html'
    }
        angular
            .module("myApp")
            .component("welcomeComponent", welcomeComponent)
})();