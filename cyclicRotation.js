var num = 12345;

const printRotated = (num, answer) => {
  var lastDigit = num % 10;
  var newNum = Math.floor(num / 10);
  var digits = newNum.toString().length;
  var multiplier = Math.pow(10, digits);
  var rotatedNumber = lastDigit * multiplier + newNum;
  console.log("rotater", rotatedNumber);
  if (rotatedNumber != answer) {
    printRotated(rotatedNumber, answer);
  }
  return rotatedNumber;
};

printRotated(num, num);
