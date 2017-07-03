function intervencionController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('intervencionCtrl', intervencionCtrl);

    intervencionCtrl.$inject = ['$timeout', '$mdSidenav','$state', '$scope'];

    function intervencionCtrl($timeout, $mdSidenav,$state, $scope){

//---------------------------------------------------------------------------
  $scope.itemsCirujano = [];
  $scope.AddItemCirujano = function(item) {
    $scope.itemsCirujano.push($scope.we3);
    $scope.we3 = "";
  };
  $scope.RemoveItemCirujano = function(item) {
    $scope.itemsCirujano.splice($scope.itemsCirujano.indexOf(item), 1);
  };

//---------------------------------------------------------------------------
  $scope.itemsAnestesista = [];
  $scope.AddItemAnestesista = function(item) {
    $scope.itemsAnestesista.push($scope.we4);
    $scope.we4 = "";
  };
  $scope.RemoveItemAnestesista = function(item) {
    $scope.itemsAnestesista.splice($scope.itemsAnestesista.indexOf(item), 1);
  };

  //---------------------------------------------------------------------------
  $scope.itemsAyudante = [];
  $scope.AddItemAyudante = function(item) {
    $scope.itemsAyudante.push($scope.we5);
    $scope.we5 = "";
  };
  $scope.RemoveItemAyudante = function(item) {
    $scope.itemsAyudante.splice($scope.itemsAyudante.indexOf(item), 1);
  };

        //$scope.datess = new Date();
        var date = new Date();
        $scope.datess = ('0' + date.getDate()).slice(-2) + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + date.getFullYear();

        var self = this; //jshint ignore:line
        function send(){
            $state.go('cirugia.conteo',{ user: self.user });
        }
        function volverPreingreso(){
            $state.go('cirugia.pre_ingreso',{ user: self.user });
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
            self.volverPreingreso = volverPreingreso;
        }
        init();
    }
}
module.exports = intervencionController;