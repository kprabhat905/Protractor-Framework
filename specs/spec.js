var calcPage = require('../pages/calcPage');
var testData = require('../testData');
var using = require('jasmine-data-provider');

describe('First Test', function () {
  beforeAll(function () {
    return browser.get('https://juliemr.github.io/protractor-demo/');
  });

  it('verifying the title', async function () {
    await expect(browser.getTitle()).toBe('Super Calculator');
  });

  using(testData.specData, function (data) {
    it('add', async function () {
      await calcPage.add(data.num1, data.num2);
      browser.sleep(5000);
      await expect(element(by.css('.container h2')).getText()).toEqual(
        data.num3
      );
      browser.sleep(5000);
    });
  });
});
