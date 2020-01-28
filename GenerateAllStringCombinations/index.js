window.onload = function() {
  const computePossibleCombinations = string => {
    var length = string.length;
    let combinations = [];
    for (var i = 0; i < length; i += 1) {
      var j = i;
      while (j < length) {
        const str = string.slice(i, j + 1);
        j += 1;
        combinations.push(str);
      }
    }
    return combinations;
  };

  document.getElementsByClassName("button")[0].addEventListener("click", () => {
    const string = document.getElementsByClassName("input")[0].value;
    if (string) {
      const comb = computePossibleCombinations(string);
      document.getElementById("combo").innerHTML = comb;
    }
  });
};
