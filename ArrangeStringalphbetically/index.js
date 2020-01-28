window.onload = function() {
  const arrangeAlphabetically = str => {
    var string = "";
    var alpha = [];
    var i = 0;
    while (i < str.length) {
      alpha[str[i].charCodeAt(0)] = 1;
      i += 1;
    }
    var j = 65;
    while (j < 123) {
      if (alpha[j] === 1) {
        var charac = String.fromCharCode(j);
        string = string.concat(charac);
      }
      j += 1;
    }
    return string;
  };

  document.getElementsByClassName("button")[0].addEventListener("click", () => {
    const string = document.getElementsByClassName("input")[0].value;
    if (string) {
      const str = arrangeAlphabetically(string);
      document.getElementById(
        "arranged-alphabetically"
      ).innerHTML = `The alphbetically arranged string is ${str}`;
    }
  });
};
