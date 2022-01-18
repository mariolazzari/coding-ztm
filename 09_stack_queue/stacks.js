// LIFO
const Stack = require("./Stack");

const stack = new Stack();
stack.push("google");
stack.push("udemy");
stack.push("discord");
console.log(stack);

const removed = stack.pop();
console.log("pop:", removed);
