const Node = require("./Node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqeue(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    }

    if (this.length === 1) {
      this.last = null;
    }

    const oldFirst = this.first;
    this.first = this.first.next;
    this.length--;

    return oldFirst;
  }

  isEmpty() {
    return this.length === 0;
  }
}

module.exports = Queue;
