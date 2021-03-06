'use strict';

var angular = require('angular'),
    ngRoute = require('angular-route');

require( './modules/AuthService' );

require( './controllers/ApplicationController' );
require( './controllers/AutoCompleteSearch' );

require( './directives/app-version' );

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'Authentication',
    'myApp.controllers',
    'myApp.directives'
]);
