angular.module('pigApp', [])
  .service('PigLatinService', PigLatinService)
  .controller('PigController', ["$scope", 'PigLatinService', PigController]);

function PigController($scope, service) {
  var self = this;
  self.service = service;

  self.inputValue = "Potato";
  self.pigLatin = "Please Type In Textbox For Translation";

  self.inputChanged = function() {
    self.pigLatin = self.service.upper(self.inputValue);
    //self.pigLatin = self.inputValue.toUpperCase();
  };


}

function PigLatinService() {
  this.upper = function(str) {
    return str.toUpperCase();
  }
}