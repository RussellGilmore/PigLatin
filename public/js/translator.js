angular.module('pigApp', [])
  .service('PigLatinService', PigLatinService)
  .controller('PigController', ["$scope", 'PigLatinService', PigController]);

function PigController($scope, service) {
  var self = this;
  self.service = service;

  self.inputText = [];
  self.pigLatin = [];

}

function PigLatinService() {

}