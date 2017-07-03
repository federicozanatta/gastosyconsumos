(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
	'use strict';
	var app = angular.module('quirofano', ['ui.router','ngMaterial','ngSanitize'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");
		$stateProvider
		//.state('land', { url: "/", templateUrl: "./dist/routes/land/land.template.html", controller:"landCtrl", controllerAs:"land" })
		//.state('home', { url: "/", templateUrl: "./dist/routes/home/home.template.html", controller:"homeCtrl", controllerAs:"home" })
		//.state('home.result', { url: "result", templateUrl: "./dist/routes/result/result.template.html",params: { user: null}, controller:"resultCtrl", controllerAs:"result" })
		.state('cirugia', { url: "/", templateUrl: "./dist/routes/cirugia/cirugia.template.html", controller:"cirugiaCtrl", controllerAs:"cirugia" })
		//.state('cirugia.api', { url: "api", templateUrl: "./dist/routes/pre_ingreso/api.html",params: { user: null}, controller:"api", controllerAs:"pre_ingreso" })
		.state('cirugia.pre_ingreso', { url: "pre_ingreso", templateUrl: "./dist/routes/pre_ingreso/pre_ingreso.template.html",params: { user: null}, controller:"pre_ingresoCtrl", controllerAs:"pre_ingreso" })
		.state('cirugia.intervencion', { url: "intervencion", templateUrl: "./dist/routes/intervencion/intervencion.template.html",params: { user: null}, controller:"intervencionCtrl", controllerAs:"intervencion" })
		.state('cirugia.conteo', { url: "conteo", templateUrl: "./dist/routes/conteo/conteo.template.html",params: { user: null}, controller:"conteoCtrl", controllerAs:"conteo" })
		.state('cirugia.revision', { url: "revision", templateUrl: "./dist/routes/revision/revision.template.html",params: { user: null}, controller:"revisionCtrl", controllerAs:"revision" })
		

	});
	app.run(function (){});	
	//require('./routes/land/land.js')(angular, app);
	require('./routes/cirugia/cirugia.js')(angular, app);
	require('./routes/pre_ingreso/pre_ingreso.js')(angular, app);
	//require('./routes/pre_ingreso/pre_ingreso-hora.js')(angular, app);
	require('./routes/intervencion/intervencion.js')(angular, app);
	require('./routes/conteo/conteo.js')(angular, app);
	require('./routes/revision/revision.js')(angular, app);
	require('./services/users/users.js')(angular, app);
})();

},{"./routes/cirugia/cirugia.js":2,"./routes/conteo/conteo.js":3,"./routes/intervencion/intervencion.js":4,"./routes/pre_ingreso/pre_ingreso.js":5,"./routes/revision/revision.js":6,"./services/users/users.js":7}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
function pre_ingresoController(angular, app) {
  'use strict';

    'use angular template'; //jshint ignore:line

    app.controller('pre_ingresoCtrl', pre_ingresoCtrl);

    pre_ingresoCtrl.$inject = ['$timeout', '$mdSidenav','$state', '$scope','$http', 'userService','$filter', '$parse'];

    function pre_ingresoCtrl($timeout, $mdSidenav, $state, $scope, $http, userService, $filter, $parse){

//---------------------------------------------------------------------------
$scope.itemsCirculante = [];
$scope.AddItemCirculante = function() {
  var dni1 = $scope.we1;
  if ($scope.we1.length == 0) {
   console.log($scope.we1.length);
 } else {
  userService.getByDni(dni1)
  .success(function(response) {
    var userInfo = $filter('filter')(response, {dni: dni1}, true)[0];
    $scope.user = userInfo ? userInfo : "";
    if($scope.user){
      $scope.dniNotFoundError = "";
      console.log($scope.user.nombre);
      var user2 = JSON.parse(sessionStorage.getItem('user'));
      user2.circulante.push($scope.user);
      sessionStorage['user'] = JSON.stringify(user2);
      console.log($scope.user.dni);
      var dniTest = $scope.user.dni;
      if (dni1 == dniTest) {
        $scope.itemsCirculante.push($scope.user.nombre);
        $scope.we1 = "";
      } else {    
        $scope.itemsCirculante.push($scope.we1);
        $scope.we1 = "";
      } 
    }else {
      $scope.dniNotFoundError = "No se encontro el dni";
    }
    console.log($scope.dniNotFoundError);
  })
  .error(function(e) {
    console.log("test de error");
  });
}
document.getElementById("circulante").blur();
};
$scope.RemoveItemCirculante = function(item) {
  $scope.itemsCirculante.splice($scope.itemsCirculante.indexOf(item), 1);
};

  //---------------------------------------------------------------------------
  $scope.itemsInstrumentista = [];
  $scope.AddItemInstrumentista = function() {
  var dni2 = $scope.we2;
  if ($scope.we2.length == 0) {
   console.log($scope.we2.length);
 } else {
  userService.getByDni(dni2)
  .success(function(response) {
    var userInfo = $filter('filter')(response, {dni: dni2}, true)[0];
    $scope.user = userInfo ? userInfo : "";
    if($scope.user){
      $scope.dniNotFoundError = "";
      console.log($scope.user.dni);
      var dniTest = $scope.user.dni;
      if (dni2 == dniTest) {
        $scope.itemsInstrumentista.push($scope.user.nombre);
        $scope.we2 = "";
      } else {    
        $scope.itemsInstrumentista.push($scope.we2);
        $scope.we2 = "";
      } 
    }else {
      $scope.dniNotFoundError = "No se encontro el dni";
    }
    console.log($scope.dniNotFoundError);
  })
  .error(function(e) {
    console.log("test de error");
  });
}
};
  $scope.RemoveItemInstrumentista = function(item) {
    $scope.itemsInstrumentista.splice($scope.itemsInstrumentista.indexOf(item), 1);
  };

  //---------------------------------------------------------------------------
  $scope.AddPaciente = function() {
     var pDNI = $scope.pacienteDNI;
  if ($scope.pacienteDNI.length == 0) {
   console.log($scope.pacienteDNI.length);
 } else {
  userService.getByDni(pDNI)
  .success(function(response) {
    var userInfo = $filter('filter')(response, {dni: pDNI}, true)[0];
    $scope.user = userInfo ? userInfo : "";
    if($scope.user){
      $scope.dniNotFoundError = "";
      console.log($scope.user.nombre);
      var dniTest = $scope.user.dni;
      if (pDNI == dniTest) {
        $scope.pacienteNombre = $scope.user.nombre;
        $scope.pacienteEdad = $scope.user.edad;
        $scope.pacienteDomicilio = $scope.user.domicilio;
        $scope.pacienteDiagnostico = $scope.user.diagnostico;
        $scope.pacienteHC = $scope.user.historia;
        $scope.pacienteFI = $scope.user.fechaIngreso;
        $scope.pacienteOS = $scope.user.obraSocial;
      } else {    
        console.log("no funco");
      } 
    }else {
      $scope.dniNotFoundError = "No se encontro el dni";
    }
    console.log($scope.dniNotFoundError);
  })
  .error(function(e) {
    console.log("test de error");
  });
}
document.getElementById("paciente").blur();
  };
 //---------------------------------------------------------------------------
    $scope.AddDiagnostico = function(valor) {
      $scope.textoFinal = [];
      if (valor) {
        $scope.textoFinal.push(valor + " ");
      } else {
        console.log("valor vacio");
      }
      //document.getElementById("test").blur();
  var recognizer = new webkitSpeechRecognition();
  //recognizer.continuous = true;
  recognizer.lang = "es";
  recognizer.onresult = function(event) {
    if (event.results.length > 0) {
      document.getElementById("test").focus();
         var result = event.results[event.results.length-1];
        if(result.isFinal) {
              document.getElementById("test").focus();
              $scope.textoFinal += (result[0].transcript);
              $scope.pacienteDiagnostico = $scope.textoFinal;
              document.getElementById("test").blur();
          }  
          document.getElementById("test").blur();  
      }
  } ;
  recognizer.start();
}

 //---------------------------------------------------------------------------
        //$scope.datess = new Date();
        var date = new Date();
        $scope.datess = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();

        var self = this; //jshint ignore:line
        function send(a){
          if (a) {
            $state.go('cirugia.intervencion',{ user: self.user });
          } else {
            $scope.showMe1 = false; 
            $scope.showMe1 = !$scope.showMe1;
          }         
        }
 //       function myFunction() {           
  //      var x = document.getElementById("pre_ingreso.user.circulante").value;
  //      document.getElementById("demo").innerHTML = x;
  //      }

  function volverCirugia(){
    $state.go('cirugia',{ user: self.user });
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
    self.volverCirugia = volverCirugia;
   }

   init();
 }
}

module.exports = pre_ingresoController


},{}],6:[function(require,module,exports){
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
},{}],7:[function(require,module,exports){
function userService(angular, app) {

	app.service('userService', userService);

	userService.$inject = ['$q', '$http', '$filter'];
	function userService($q, $http, $filter){
        this.getByDni = function(dni){
           return $http.get('./dist/data/user.json');
        };
	}
}
module.exports = userService;
},{}]},{},[1]);
