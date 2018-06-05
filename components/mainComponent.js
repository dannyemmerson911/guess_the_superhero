(function(){
    const mainComponent = {
        templateUrl: '/partials/gameScreen.html',
        controller: function(MainService) {
            $ctrl = this;
            $ctrl.player = MainService.setName();
        }
    }
    angular
        .module("myApp")
        .component("mainComponent", mainComponent);
})();