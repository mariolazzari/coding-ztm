const Node = require("./Node");

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          // Left
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          // Right
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        // Left
        current = current.left;
      } else if (value > current.value) {
        // Right
        current = current.right;
      } else if (value === current.value) {
        // Found
        return current;
      }
    }

    return false;
  }

  remove(value) {}
}

module.exports = BinaryTree;
