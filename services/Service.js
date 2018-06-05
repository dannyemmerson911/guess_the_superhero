(() => {
    MainService = () => {
        var playerName;
        
        return {
            setName : setName,
            getName : getName
        }
        function getName (name){
            playerName = name; 
            console.log(playerName);
        }
        function setName () {
            return playerName; 
        }
    }
    angular
    .module("myApp")
    .factory("MainService", MainService); 

})();