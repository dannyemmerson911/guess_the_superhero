(function(){
    const gameScreenComponent = {
        templateUrl: 'gameScreen.html',
        controller: () => {
            $ctrl = this; 
        }
    }
    angular
        .module("myApp")
        .component("gameScreenComponent", gameScreenComponent);
})();