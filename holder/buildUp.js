const prompt = require("prompt-sync")({ sigint: true });

let keepGoing = true;
// let genNumb = 7;
let genNumb = Math.floor(Math.random() * 10) + 1;

while (keepGoing) {
  let end = prompt("Enter Exit to quit the Program: ").toLowerCase();

  if (end === "exit") {
    console.log("GoodBye");
    break;
  }
  let guessNumb = parseInt(prompt("Guess a number btw 1-10: "));
  if (genNumb === guessNumb) {
    console.log("Awesome");
    break;
  }
  console.log("Keep Going");
}
