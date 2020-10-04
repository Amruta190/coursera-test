(function () {
"use strict";

angular.module('public')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['menuItems'];
function MenuItemsController(menuItems) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;

  $ctrl.getItemFromShortName = function () {
    var shortNameEndPoint = 'menu_items/SHORT-NAME.json';
  }
}

})();