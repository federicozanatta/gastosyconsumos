function revisionController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('revisionCtrl', revisionCtrl);

    revisionCtrl.$inject = ['$timeout', '$mdSidenav','$state', '$scope'];

    function revisionCtrl($timeout, $mdSidenav, $state, $scope){
var self = this; //jshint ignore:line

    $scope.password = [];
//--------------------------------------------------------------
    $scope.showMe1 = false;
    $scope.myFunc1 = function() {
        $scope.showMe1 = !$scope.showMe1;
    };
//--------------------------------------------------------------
    $scope.showMe2 = false;
    $scope.myFunc2 = function() {
        $scope.showMe2 = !$scope.showMe2;
    };
//--------------------------------------------------------------
        $scope.showMe3 = false;
    $scope.myFunc3 = function() {
        $scope.showMe3 = !$scope.showMe3;
    };
//--------------------------------------------------------------
        $scope.showMe4 = false;
    $scope.myFunc4 = function() {
        $scope.showMe4 = !$scope.showMe4;
    };
//--------------------------------------------------------------
        $scope.showMe5 = false;
    $scope.myFunc5 = function() {
        $scope.showMe5 = !$scope.showMe5;
    };
//--------------------------------------------------------------
        $scope.showMe6 = false;
    $scope.myFunc6 = function() {
        $scope.showMe6 = !$scope.showMe6;
    };
//--------------------------------------------------------------
        
        function send(){
           console.log("Final del informe");
           $state.go('cirugia',{ user: self.user });
        }
     function volverConteo(){
            $state.go('cirugia.conteo',{ user: self.user });
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
            self.volverConteo = volverConteo;
            self.users = JSON.parse(sessionStorage.getItem('user'));
            console.log(self.users);
        }
        init();
    }
}
module.exports = revisionController;