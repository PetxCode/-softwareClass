const prompt = require("prompt-sync")({ sigint: true });

// let keepGoing = true;
// while (keepGoing) {
//   let entryData = prompt("Enter 'Quit' to Exist this Program: ");
//   let entry = entryData.toLowerCase();

//   if (entry !== "quit") {
//     let data = parseInt(prompt("Enter a value: "));
//     let totalEntry = data++;
//     console.log(totalEntry);
//     console.log("Awesome... let's keep going!");
//   } else {
//     console.log("Sorry, this is where we'll have to end");
//     break;
//   }
// }

// while (true) {
//   let x = parseInt(prompt("Enter a value: "));
//   x = x++;
//   console.log(x);
// }

// function greeting(name) {
//   console.log(`Good morning ${name}`);
// }
// greeting("Peter");

// const greeting = (name) => {
//   return console.log(`Hello ${name}`);
// };

// let name = prompt("What's your name: ");

// greeting(name);

// const theGame = () => {
//   let i = 0;
//   while (i < 4) {
//     let guess = Math.floor(Math.random() * 10 + 1);
//     let myValue = parseInt(prompt("Enter your value btw 1-10: "));
//     if (i === 0) {
//       console.log("Game Over");
//     } else if (guess === myValue) {
//       console.log(`You just got my Number, right!`);
//       break;
//     } else if (guess !== myValue) {
//       console.log(`Sorry, you have ${3 - i} left`);
//     }

//     i++;
//   }
//   return true;
// };

// theGame();

// let keepGoing = true

// while(keepGoing ){

//   console.log()
//   action = prompt("To quit enter Exit: ")
//   if(action === "exit"){
//     console.log("")
//   }
// }

// let i = 0;
// while (i < 4) {
//   let guess = Math.floor(Math.random() * 10 + 1);
//   let myValue = parseInt(prompt("Enter your value btw 1-10: "));
//   let exit = prompt("Enter your value btw 1-10: ");
//   if (exit === "exit") {
//     console.log(`You just got my Number, right!`);
//     break;
//   }

//   console.log(`Sorry, you have ${3 - i} left`);

//   i++;
// }
