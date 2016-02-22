'use strict';
var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'app/tire/tire.html',
            controller:'ControllerTire'
        })
        .when('/about',{
            templateUrl:'app/about/about.html',
            controller:'ControllerAbout'
        })
        .when('/contact',{
            templateUrl:'app/contact/contact.html',
            controller:'ControllerContact'
        })
        .when('/tire/:tireId',{
            templateUrl:'app/tire/tire-details.html',
            controller:'ControllerTireDetails'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);






