var testData = function () {
  this.specData = function () {
    return [
      {
        num1: 2,
        num2: 2,
        num3: '4',
      },
      {
        num1: 4,
        num2: 2,
        num3: '6',
      },
    ];
  };
};

module.exports = new testData();
