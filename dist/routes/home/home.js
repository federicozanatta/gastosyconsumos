function homeController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function homeCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('home.result',{ user: self.user });
        }
        function buildToggler(componentId) {
            $mdSidenav(componentId).toggle();
        }
        function toggleLeft(){ 
            buildToggler('left'); 
        }
        function toggleRight() { 
            buildToggler('right');
        }


        function init(){
            self.user = {};
            self.toggleLeft = toggleLeft;
            self.toggleRight = toggleRight;
            self.send = send;
        }
        init();
    }
}
module.exports = homeController;