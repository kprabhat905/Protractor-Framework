var helper = require('../helper');
var elementLocators = require('../elements.json');

var calcPage = function () {
  var firstInput = element(by.model(elementLocators.Locators.firstInput));
  var secondInput = element(by.model(elementLocators.Locators.secondInput));
  var op = element(by.model(elementLocators.Locators.op));
  var goButton = element(by.id(elementLocators.Locators.goButton));

  this.add = function (num1, num2) {
    firstInput.sendKeys(num1);
    helper.selectDropdownbyNum(op, 0);
    secondInput.sendKeys(num2);

    goButton.click();
  };
};

module.exports = new calcPage();
