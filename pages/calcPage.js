var helper = require('../helper');

var calcPage = function () {
  var firstInput = element(by.model('first'));
  var secondInput = element(by.model('second'));
  var op = element(by.model('operator'));
  var goButton = element(by.id('gobutton'));

  this.add = function (num1, num2) {
    firstInput.sendKeys(num1);
    helper.selectDropdownbyNum(op, 0);
    secondInput.sendKeys(num2);

    goButton.click();
  };
};

module.exports = new calcPage();
