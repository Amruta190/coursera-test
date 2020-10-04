(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'http://restaurant-spa.herokuapp.com/menu_items/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();