let user = {
  age: 25,
  name: "John",
  magic: true,
  screem: function () {
    console.log("shh");
  },
};

//O(1)
user.age;
user.spell = "test";
user.screem();

// collision:
// O(n/k) => O(n)
// https://www.cs.usfca.edu/~galles/visualization/OpenHash.html

const map = new Map();
const set = new Set();
