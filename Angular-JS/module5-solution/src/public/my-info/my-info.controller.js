(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MyInfoService'];
function MyInfoController(MyInfoService) {
  var $ctrl = this;
  $ctrl.saved = false;
  $ctrl.user = {};
  $ctrl.menuItem = {};

  $ctrl.submit = function () {
    MyInfoService.saveUserInfo($ctrl.user);
    var menuItem =  MyInfoService.checkMenuItem($ctrl.user);
    menuItem.then(function (response) {
      $ctrl.menuItem = MyInfoService.getMenuItem();
      $ctrl.user = MyInfoService.getUserInfo();
      $ctrl.saved = true;
    })
    .catch((err) => {
      $ctrl.user = MyInfoService.getUserInfo();
      $ctrl.saved = false;
    })
  };
}


})();