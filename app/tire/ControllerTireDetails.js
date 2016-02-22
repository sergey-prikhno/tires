angular
    .module('app')
    .controller('ControllerTireDetails',['$scope', '$routeParams','serviceTire', function($scope, $routeParams, serviceTire){
        $scope.tireId = $routeParams.tireId;

        serviceTire.getTire($scope.tireId).then(function(results){
            $scope.tireData = results;
        });


    }]);
