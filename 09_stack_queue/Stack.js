const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // O(1)
  peek() {
    return this.top;
  }

  // O(1)
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const oldTop = this.top;
      this.top = newNode;
      newNode.next = oldTop;
    }

    this.length++;
  }

  // O(1)
  pop() {
    this.length--;
  }

  // O(1)
  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Stack;
