window.onload = function() {
  const findPerfect = number => {
    var perfect = false;
    let sum = 0;
    var i = 0;
    while (i <= number / 2) {
      if (number % i == 0) {
        sum = sum + i;
      }
      i += 1;
    }
    if (sum === parseInt(number)) {
      perfect = true;
    }
    return perfect;
  };

  document
    .querySelector(".button-perfect")
    .addEventListener("click", function() {
      const number = document.getElementsByClassName("input")[0].value;
      if (number) {
        const perfect = findPerfect(number);
        document.getElementById(
          "perfect-number"
        ).innerHTML = `Perfect Number: ${perfect}`;
      }
    });
};
