const prompt = require("prompt-sync")({ sigint: true });

function bag1() {
  console.log("Peter 1");
}

const bag = () => {
  let name = "Peter";
  console.log(`Hello ${name}`);
};

// bag();

const sum = (a = 3, b = 6) => {
  let x = a + b;
  return console.log(`The sum of ${a} and ${b} is:  ${x}`);
};

// <= >= =>
// console.log(" ");
// name course="software"

// MongoDB, React, Node, Express

// sum();

let name = prompt("What is your Name: ");
// let course =

const formClass = (name, course = "React") => {
  return console.log(`Hello ${name} you've registered for ${course}`);
};

formClass(name, "MongoDB");
