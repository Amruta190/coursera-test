(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MyInfoService'];
function SignUpController(MyInfoService) {
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
      $ctrl.saved =  MyInfoService.isSaved();
    })
    .catch((err) => {
      $ctrl.user = MyInfoService.getUserInfo();
      $ctrl.saved = MyInfoService.isSaved();
    })
  };
}


})();