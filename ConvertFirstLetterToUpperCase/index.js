window.onload = function() {
  const capitalizeFirstLetter = str => {
    var arrayOfString = str.split(" ");
    const capitalizedArray = arrayOfString.map(word => {
      if (word.charCodeAt(0) > 96 && word.charCodeAt(0) < 123) {
        const asciiVal = word.charCodeAt(0) - 32;
        const asciiAlph = String.fromCharCode(asciiVal);
        const firstAlph = word.charAt(0);
        word = word.replace(firstAlph, asciiAlph);
        return word;
      }
      return word;
    });

    console.log("capitalizedArray", capitalizedArray);
    var capitalizedString = capitalizedArray.join(" ");
    return capitalizedString;
  };

  document.getElementsByClassName("button")[0].addEventListener("click", () => {
    const string = document.getElementsByClassName("input")[0].value;
    if (string) {
      const str = capitalizeFirstLetter(string);
      document.getElementById(
        "capitalize-first-letter"
      ).innerHTML = `The capitalized string is ${str}`;
    }
  });
};
