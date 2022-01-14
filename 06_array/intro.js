// 4 x 4 = 16 bytes
const strings = ["a", "b", "c", "d"];

const third = strings[2];
console.log(third);

// O(1)
strings.push("e");
// O(1)
strings.pop();
// O(n)
strings.unshift("x");
// O(n)
strings.splice(2, 0, "mario");

console.log(strings);
