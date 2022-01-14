const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = Array(100).fill("nemo");

function findNemo(array) {
  //let t0 = performance.now();

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Nemo found at index " + i);
    }
  }

  //let t1 = performance.now();

  /*console.log(
    "Call to find Nemo took " + (t1 - t0).toFixed(2) + " milliseconds"
  );
  */
}

// Number of operations
// O(n) -> linear
findNemo(nemo);
findNemo(everyone);
findNemo(large);

let boxes = [0, 1, 2, 3, 4, 5];

// O(n)
function compressAll(boxes) {
  boxes.forEach(box => {
    console.log("Linear compressing...", box);
  });
}

// O(1) => constant
function compressOne(box) {
  console.log("Constant compressing...", box);
}

compressAll(boxes); // O(n)
compressOne(boxes[0]); // O(1)

function logFirst2(array) {
  console.log(array[0]); // O(1)
  console.log(array[1]); // O(1)
}
logFirst2(boxes); // O(1)

// O(n^2) => quadratic
boxes = ["a", "b", "c", "d", "e"];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairs(boxes);

// O(n + n^2) => (n^2)
