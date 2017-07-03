function conteoController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('conteoCtrl', conteoCtrl);

    conteoCtrl.$inject = ['$timeout', '$mdSidenav','$state'];

    function conteoCtrl($timeout, $mdSidenav,$state){
        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.revision',{ user: self.user });
        }
        function volverIntervencion(){
            $state.go('cirugia.intervencion',{ user: self.user });
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
            self.volverIntervencion = volverIntervencion;
        }
        init();
    }
}
module.exports = conteoController;