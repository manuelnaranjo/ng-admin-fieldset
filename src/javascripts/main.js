import angular from 'angular';

var mod = angular.module('ng-admin-fieldset', ['ng-admin']);

mod.config(require('./config/form.js'));
