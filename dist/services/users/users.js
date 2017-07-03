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