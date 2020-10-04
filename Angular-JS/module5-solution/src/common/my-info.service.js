(function () {
"use strict";

angular.module('common')
.service('MyInfoService', MyInfoService);


MyInfoService.$inject = ['$http', 'ApiPath', '$filter'];
function MyInfoService($http, ApiPath, $filter) {
  var service = this;
  service.user = {};
  service.menuItem = {};
  service.saved = false;

  service.getUserInfo = function () {
    return service.user;
  };

  service.saveUserInfo = function (user) {
    service.user = user;
  };

  service.checkMenuItem = function (user) {
    return $http.get( ApiPath + $filter('uppercase')(user.favmenuitem) + '.json')
            .then(function (response) {
              service.menuItem = response.data;
              service.saved = true;
              return true;
            })
  };

  service.getMenuItem = function () {
      return service.menuItem;
  };
  service.isSaved = function () {

    return  service.saved;

  };
}
})();