angular
    .module('app')
    .controller('ControllerTire',['$scope', 'serviceTire', function($scope, serviceTire){
        $scope.tireTitle = 'Шины';
        $scope.price = [{title:'до 700 грн', start:0, end:700},
                        {title:'от 700 до 900 грн', start:700, end:900},
                        {title:'от 900 до 1500 грн', start:900, end:1500},
                        {title:'от 1500 до 2000 грн', start:1500, end:2000},
                        {title:'от 2000 грн и выше', start:2000, end:Number.MAX_VALUE}];
        $scope.topBrend = ['Barum','Bridgestone','Cordiant','Goodyear','Hankook','Matador','Michelin','Nexen','Nokian','Rosava'];
        $scope.tires = [];
        $scope.dataFilter = {start:0, end:0};
        activate();

        function activate() {
            serviceTire.getAll().then(function(results){
                $scope.tires = results;
            });
        }

        $scope.DataFilter = function (pData){
            $scope.dataFilter = pData;
        }

    }])

    .filter('filterTires', function() {
        return function (items, dataFilter) {
            if(dataFilter.start == 0 && dataFilter.end == 0){
                return items;
            }else {
                var filtered = [];
                for (var i = 0; i < items.length; i++) {
                    if(items[i].price > dataFilter.start && items[i].price < dataFilter.end){
                        filtered.push(items[i]);
                    }
                }
                return filtered;
            }


        };
    });
