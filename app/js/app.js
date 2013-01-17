'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.when('/schedules', {templateUrl: 'partials/schedule.html', controller: MySchedules});
    $routeProvider.when('/groups:groupix', {templateUrl: 'partials/group.html', controller: MyGroups});
    $routeProvider.when('/faults:groupix:faultix', {templateUrl: 'partials/fault.html', controller: MyFaults});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
