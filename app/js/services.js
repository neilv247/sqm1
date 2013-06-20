'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

var app = angular.module('myps', []);

app.service('partialResults', function() {
    var inspection = {};
    
    return {
        setObject: function(value) {
            inspection = value;
        },
        getObject: function() {
            return inspection;
        }
    }
});

