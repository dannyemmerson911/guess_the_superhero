(function(){
    const welcomeComponent = {
        templateUrl: '/partials/welcome.html',
        controller: function(MainService, $location, $element){
            $ctrl = this; 
            $ctrl.clicked = false;
            $ctrl.nameForm = false; 
            $ctrl.startGame = () => {
                console.log("game started");
            }
            $ctrl.getName = function(name) {
                const playerName = name;
                console.log(playerName);
                MainService.getName(playerName); 
            }
        }
    }
    angular
        .module("myApp")
        .component("welcomeComponent", welcomeComponent);
})();