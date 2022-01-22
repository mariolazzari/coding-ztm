const addTo80 = () => {
  let cache = {};

  return n => {
    if (n in cache) {
      console.log(`${n} is in cache`);
      return cache[n];
    }

    console.log(`${n} is not in cache`);
    cache[n] = n + 80;
    return cache[n];
  };
};

let res = addTo80();
console.log(res(10));
console.log(res(10));
console.log(res(5));
console.log(res(10));

res = addTo80(5);
console.log(res);

res = addTo80(10);
console.log(res);

res = addTo80(5);
console.log(res);
