// Practice to make and edit an array.
// Completed by: Darla Ward
// Completed on: 10/04/2022
var str = "Jordan      ,Nathan     ,       Cameron,        Devon";
var arr = str.split(",");

var newArr = arr.map(function (word) {
  return word.trim();
});

var arr = newArr;

console.log(arr);
