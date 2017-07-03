function cirugiaController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('cirugiaCtrl', cirugiaCtrl);

    cirugiaCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function cirugiaCtrl($timeout, $mdSidenav,$state){
        var user = {
        circulante : [],
        instrumentista : []
       };
       sessionStorage.setItem('user', JSON.stringify(user));
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.pre_ingreso',{ user: self.user});
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
module.exports = cirugiaController;