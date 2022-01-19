// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

const letters = ["a", "x", "b", "y", "c", "z"];
console.log("sorted:", letters.sort());

const basket = [1, 111, 34, 2, 23, 4, 5, 6, 7, 8, 9, 0];
console.log(
  "sorted:",
  basket.sort((a, b) => a - b)
);
