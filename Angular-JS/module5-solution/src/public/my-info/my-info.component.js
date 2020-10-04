;(function () {
  'use strict'

  angular.module('public')
  .component('myInfo', {
    templateUrl: 'src/public/my-info/my-info.template.html',
    bindings: {
      firstname: '<',
      lastname: '<',
      email: '<',
      phone: '<',
      favedish: '<'
    }
  })

})()