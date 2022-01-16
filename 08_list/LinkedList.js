// linked list
const Node = require("./Node");

// https://visualgo.net/en/list?slide=1

// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // O(n)
  printList() {
    let values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    return values;
  }

  // O(n)
  traverseToIndex(index) {
    let current = 0;
    let currentNode = this.head;

    while (current < index) {
      currentNode = currentNode.next;
      current++;
    }

    return currentNode;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;
  }

  insert(index, value) {
    // check input
    if (index >= this.length) {
      return this.append(value);
    }

    // create new node
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.next = follower;
    this.length++;
  }

  // O(n)
  remove(index) {
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(200, 99);
myLinkedList.insert(2, 22);
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
