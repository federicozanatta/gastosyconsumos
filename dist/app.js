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
