// O(n^2) time complexity
// O(1) space complexity
function commonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

let a1 = ["a", "b", "c", "x"];
let a2 = ["z", "y", "i"];
let a3 = ["z", "y", "x"];
let t1, t2;

t1 = performance.now();
let test1 = commonItems(a1, a2); // O(n + m)
let test2 = commonItems(a1, a3); // O(n + m)
t2 = performance.now();
console.log(test1, test2, (t2 - t1).toFixed(3));

// O(n) time complexity
// O(a + b) space complexity
function commonItems2(arr1, arr2) {
  // map first array to object
  const map = {};
  arr1.forEach(e => {
    if (!map[e]) {
      map[e] = true;
    }
  });

  // check if each element in second array is in map
  for (const e of arr2) {
    if (map[e]) {
      return true;
    }
  }

  return false;
}

t1 = performance.now();
test1 = commonItems2(a1, a2); // O(a + b)
test2 = commonItems2(a1, a3); // O(a + b)
t2 = performance.now();
console.log(test1, test2, (t2 - t1).toFixed(3));

const commonItems3 = (arr1, arr2) => arr1.some(e => arr2.includes(e));
t1 = performance.now();
test1 = commonItems3(a1, a2); // O(a + b)
test2 = commonItems3(a1, a3); // O(a + b)
t2 = performance.now();
console.log(test1, test2, (t2 - t1).toFixed(3));
