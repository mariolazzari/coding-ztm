// FIFO
const Queue = require("./Queue");

const queue = new Queue();
queue.enqeue("first");
queue.enqeue("second");
queue.enqeue("third");

console.log("peek:", queue.peek());
console.log("Queue: ", queue);

const rem = queue.dequeue();
console.log("removed:", rem);
