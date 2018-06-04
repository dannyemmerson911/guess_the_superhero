(function(){
    const welcomeComponent = {
        templateUrl: '/partials/welcome.html',
        controller: function() {
            $ctrl = this;
            $ctrl.playerName = function() {
                console.log("click");
                const {value: name} = swal({
                    title: 'Enter Your Name',
                    text: 'What is the player"s name?',
                    type: 'question',
                    html: 
                    '<input id = "name">',
                    confirmButtonText: 'Let"s play',
                    inputValidator: function(value) {
                        return !value && 'You need to write something!'
                    },
                    preConfirm: function () {
                        const name = document.getElementById('name').value;
                    }
                })
                console.log(name);
            }
            
        }
    }
        angular
            .module("myApp")
            .component("welcomeComponent", welcomeComponent)
})();