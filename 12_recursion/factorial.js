// O(n)
function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }

  //code here
  return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
  //code here
  let answer = 1;

  for (let i = 2; i <= number; i++) {
    answer *= i;
  }
  return answer;
}

let res = findFactorialRecursive(5);
console.log(res);
res = findFactorialIterative(5);
console.log(res);
