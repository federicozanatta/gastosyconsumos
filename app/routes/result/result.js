function resultController(angular, app) {
    'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('resultCtrl', resultCtrl);

    resultCtrl.$inject = ['$state'];

    function resultCtrl($state){
        var self = this; //jshint ignore:line

        function init(){
            self.userdata = $state.params.user;
        }
        init();
    }
};
module.exports = resultController;