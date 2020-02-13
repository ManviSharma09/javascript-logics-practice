var arr1 = [1, 2, 3, 5, 10];
var arr2 = [4, 6, 7, 8];
var arr3 = [];
var i = 0;
var j = 0;
// while (i < arr1.length) {
//   while (j < arr2.length) {
//     console.log("i and j are", i, j);
//     if (arr1[i] < arr2[j]) {
//       arr3.push(arr1[i]);
//       i++;
//     } else {
//       arr3.push(arr2[j]);
//       j++;
//     }
//   }
// }
arr3 = [...arr1, ...arr2];
for (var i = 0; i < arr3.length; i++) {
  for (var j = i + 1; j < arr3.length; j++) {
    if (arr3[i] > arr3[j]) {
      var odd = arr3[i];
      arr3[i] = arr3[j];
      arr3[j] = odd;
    }
  }
}
console.log("arr3 is", arr3);
