window.onload = function() {
  document
    .querySelector(".button-reverse")
    .addEventListener("click", function() {
      const numberToreverse = document.querySelector(".input").value;
      if (numberToreverse) {
        const reversedNumber = reverseNumber(numberToreverse);
        const divDisplay = document.createElement("DIV");
        const textNode = document.createTextNode(
          `Reversed number is ${reversedNumber}`
        );
        divDisplay.appendChild(textNode);
        document.getElementById("reverse-number").appendChild(divDisplay);
      } else {
        return;
      }
    });
  const reverseNumber = number => {
    let rev = 0;
    let numToReverse = number;
    while (numToReverse > 0) {
      const mod = numToReverse % 10;
      rev = rev * 10 + mod;
      numToReverse = Math.floor(numToReverse / 10);
    }
    return rev;
  };
};
