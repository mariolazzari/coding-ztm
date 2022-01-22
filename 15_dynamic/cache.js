let cache = {};

const addTo80 = n => {
  if (n in cache) {
    console.log(`${n} is in cache`);
    return cache[n];
  } else {
    console.log(`${n} is not in cache`);
    cache[n] = n + 80;
    return cache[n];
  }
};

let res = addTo80(10);
console.log(res);

res = addTo80(10);
console.log(res);

res = addTo80(10);
console.log(res);

res = addTo80(5);
console.log(res);

res = addTo80(5);
console.log(res);

res = addTo80(10);
console.log(res);

res = addTo80(5);
console.log(res);
