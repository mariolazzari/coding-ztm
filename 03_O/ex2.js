function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    // O(n)
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    // O(n)
    console.log("hi");
  }
}
