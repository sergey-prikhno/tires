angular
    .module('app')
    .factory('serviceTire', serviceTire);


function serviceTire($http) {

    var tire = [];

    var service = {
        tire:tire,
        getAll: getAll,
        getTire:getTire

    };
    return service;


    function getAll() {
        return $http.get("db/get-all-cars.php")
            .then(function(results){
                tire = results.data;
                return tire;
            });
    }

    function getTire(pId){
        return $http.get("db/get-tire.php",{params:{'id':pId}})
            .then(function(results){
                tire = results.data;
                return tire;
            });
    }

}
