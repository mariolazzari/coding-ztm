const BinaryTree = require("./BinaryTree");

const printTree = (_key, val) => {
  if (val) {
    return val;
  }
};

let tree = new BinaryTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(tree, printTree, 1));
console.log("find:", tree.lookup(170));
