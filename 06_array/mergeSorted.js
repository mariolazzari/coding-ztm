function merdeSorted(arr1, arr2) {
  // check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  const merged = [];
  let i = 1;
  let j = 1;
  let item1 = arr1[0];
  let item2 = arr2[0];

  while (item1 || item2) {
    if (!item2 || item1 < item2) {
      merged.push(item1);
      item1 = arr1[i];
      i++;
    } else {
      merged.push(item2);
      item2 = arr2[j];
      j++;
    }
  }

  return merged;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
const arr3 = merdeSorted(arr1, arr2);
console.log(arr3);
