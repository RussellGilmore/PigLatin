angular.module('pigApp', [])
  .service('PigLatinService', PigLatinService)
  .controller('PigController', ["$scope", 'PigLatinService', PigController]);

function PigController($scope, service) {
  var self = this;
  self.service = service;

  self.inputValue = "Potato";
  self.pigLatin = "Please Type In Textbox For Translation";

  self.inputChanged = function() {
    self.pigLatin = self.service.makePig(self.inputValue);
    //self.pigLatin = self.inputValue.toUpperCase();
  };
}

function PigLatinService() {
  var self = this;

  self.makePig = function(str) {
    // Check if data
    if (str === '') {
      return '';
    } else {
      var lowerCaseStr = str.toLowerCase();
      var normalWords = lowerCaseStr.split(' ');
      var vowels = ['a', 'e', 'i', 'o', 'u'];
      var newWord = '';
      var pigWords = [];
      // Vowel Check
      for (var i = 0; i <= normalWords.length - 1; i++) {
        for (var j = 0; j <= vowels.length - 1; j++) {
          var firstNorm = normalWords[i];
          if (firstNorm.charAt(0) == vowels[j]) {
            pigWords.push(firstNorm + 'ay');
          }
        }
        var ending = firstNorm.charAt(0) + 'ay';
        pigWords.push(firstNorm.substring(1) + ending);
      }
      // First Consonant

      var pigLatin = pigWords.join(' ');
      return pigLatin.toUpperCase();
    }
  }
}