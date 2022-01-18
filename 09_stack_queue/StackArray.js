const Node = require("./Node");

class StackArray {
  constructor() {
    array = [];
  }

  // O(1)
  peek() {
    return array[this.array.length - 1];
  }

  // O(1)
  push(value) {
    array.push(value);
  }

  // O(1)
  pop() {
    array.shift();
  }

  // O(1)
  isEmpty() {
    return this.array.length === 0;
  }
}

module.exports = StackArray;
