// reverse string

const STR = "Ciao Mario!";

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input";
  }

  const reversed = [];
  const length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join("");
}

let str = reverse(STR);
console.log(str);

function reverse2(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid input";
  }

  return str.split("").reverse().join("");
}

str = reverse2(STR);
console.log(str);

const reverse3 = str => str.split("").reverse().join("");
str = reverse3(STR);
console.log(str);

const reverse4 = str => [...str].reverse().join("");
str = reverse4(STR);
console.log(str);
