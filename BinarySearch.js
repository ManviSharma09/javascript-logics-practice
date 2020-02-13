// var arr = [1, 4, 6, 11, 98];
// var eleToSearch = 6;
// var l = 0;
// var r = 0;
// var k = 0;
// const search = (arr, eleToSearch) => {
//   var mid = Math.floor(arr.length / 2);
//   if (arr[mid] === eleToSearch) {
//     return mid;
//   } else if (arr[mid] < eleToSearch) {
//     var smallArr = [];
//     l = mid + 1;
//     r = arr.length - 1;
//     for (k = l; k <= r; k++) {
//       smallArr.push(arr[k]);
//     }
//     return search(smallArr, eleToSearch);
//   } else if (arr[mid] > eleToSearch) {
//     var smallArr = [];
//     l = 0;
//     r = mid - 1;
//     for (k = l; k <= r; k++) {
//       smallArr.push(arr[k]);
//     }
//     return search(smallArr, eleToSearch);
//   }
// };
// const value = search(arr, eleToSearch);
// console.log("value", value);

var arr = [1, 4, 6, 11, 98];
var eleToSearch = -2;
var l = 0;
var r = arr.length - 1;
var k = 0;

const search = (arr, eleToSearch, l, r) => {
  var mid = Math.floor((l + r) / 2);
  if (l > r) {
    return -1;
  }
  if (arr[mid] === eleToSearch) {
    return mid;
  } else if (arr[mid] < eleToSearch) {
    var left = mid + 1;
    return search(arr, eleToSearch, left, r);
  } else if (arr[mid] > eleToSearch) {
    var right = mid - 1;
    return search(arr, eleToSearch, l, right);
  }
};
const value = search(arr, eleToSearch, l, r);
console.log("value", value);
