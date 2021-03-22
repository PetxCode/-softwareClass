// // // // // // // let myNumb = 3;
// // // // // // // myNumb = 4;

// // // // // // // let myNumb1 = 5;
// // // // // // // let result = myNumb + myNumb1;
// // // // // // // // console.log(result);
// // // // // // // // let newResult = myNumb + myNumb / myNumb1;
// // // // // // // // console.log(newResult);

// // // // // // // // let newResult = (myNumb + myNumb) / myNumb1;
// // // // // // // // console.log(newResult);

// // // // // // // let kelvin = 45;
// // // // // // // let celcius = -273 + kelvin;
// // // // // // // console.log(celcius);

// // // // // // // //convert from Fahrenheit to celcius
// // // // // // // // (32°F − 32) × 5/9 = 0°C
// // // // // // // // = == === <= >= !=

// // // // // // // let F = 59;

// // // // // // // let C = (32 * F - 32) * (5 / 9);

// // // // // // // console.log(C);

// // // // // // // let name1 = "PETER";
// // // // // // // let name2 = "peter";

// // // // // // // if (name2 === name1) {
// // // // // // //   console.log("It's True");
// // // // // // // } else {
// // // // // // //   console.log("It's False");
// // // // // // // }

// // // // // // // 39 too Hot
// // // // // // // 27 very Hot
// // // // // // // 20 Hot
// // // // // // // below 20 good to go

// // // // // // let roomTemp = 21;

// // // // // // if (roomTemp >= 39) {
// // // // // //   console.log("Room too Hot");
// // // // // // } else if (roomTemp >= 27) {
// // // // // //   console.log("Room very Hot");
// // // // // // } else if (roomTemp >= 20) {
// // // // // //   console.log("Room  Hot");
// // // // // // } else if (roomTemp < 20) {
// // // // // //   console.log("Good to go");
// // // // // // }

// // // // // // let for = "whatever"

// // // // // let names = ["Peter", "James", "Stev"];

// // // // // let games = { name1: "PS4", name2: "Nitendo", name3: "Sega" };

// // // // // // for (name of names) {
// // // // // //   console.log(name);
// // // // // // }

// // // // // for (key in games) {
// // // // //   console.log(games[key]);
// // // // // }
// // // // let r = true;
// // // // let i = 1;

// // // // while (i < 10) {
// // // //   if (i === 5) {
// // // //     console.log("Thank you");
// // // //     break;
// // // //   }
// // // //   i++;
// // // // }

// // // const prompt = require("prompt-sync")({ sigint: true });

// // // // let name = prompt("What's your name: ");
// // // // console.log(`Hello ${name}`);

// // // let input1 = parseInt(prompt("Put in your first Value: "));
// // // let input2 = parseInt(prompt("Put in your second Value: "));
// // // let res = input1 + input2;
// // // //let x = parseInt(input1)
// // // //parseInt(input2)
// // // console.log(res);

// // for (i = 0; i < 10; i++) {
// //   if (i === 2) {
// //     console.log("Thank you");
// //     break;
// //   }
// //   console.log("WE ARE GOOD");
// // let numb = Math.floor(Math.)
// // }
// const prompt = require("prompt-sync")({ sigint: true });

// // for (let i = 0; i < 5; i++) {
// //   let myValue = 2;
// //   let yourValue = parseInt(prompt("Guess the Number on my Mind: "));
// //   if (yourValue == myValue) {
// //     console.log("Wow, you got my mind!!");
// //     break;
// //   } else {
// //     console.log("haahhahaaa, you are wrong");
// //   }

// //   console.log("Sorry, your tries are over!");
// // }

// let keepGoing = true;

// while (keepGoing) {
//   let counter = 0;
//   let exit = prompt('press "Q" to quit: ').toUpperCase();
//   // let stop =

//   if (exit != "Q") {
//     console.log("keep Going");
//     let totalStudyTime=;
//     let studyTime = parseInt(prompt("How long more do you want to study: "));
//     totalStudyTime = totalStudyTime + studyTime;
//     console.log("Your total study time is now:  " + totalStudyTime);
//   } else {
//     console.log("stop Going");
//     break;
//   }
// }

const prompt = require("prompt-sync")({ sigint: true });

// for (i = 0; i < 5; i++) {
//   let compNumb = Math.floor(Math.random() * 10);
//   let guess = parseInt(prompt("give in your guess 0-9: "));
//   // Math.random()
//   if (guess === compNumb) {
//     console.log("You read my mind right!");
//     break;
//   }
//   console.log("Keep trying" + compNumb);
// }

// // console.log(Math.floor(Math.random() * 10));

// let keepGoing = true;

// let counter = 0;

// while (keepGoing) {
//   let x = prompt("Press 'Quit' to Exit the program: ");

//   if (x === "Quit") {
//     console.log("Stop Going");
//     break;
//   }
//   console.log("Keep Going");
// }
let keepGoing = true;

while (keepGoing) {
  let quit = prompt("Enter 'quite' to Exit: ");
  let numb = 0;
  let value = parseInt(prompt("Enter your value: "));
  let totalValue = value;
  if (quit != "Quit") {
    console.log(totalValue++);
  } else {
    console.log("break running");
    break;
  }
}
