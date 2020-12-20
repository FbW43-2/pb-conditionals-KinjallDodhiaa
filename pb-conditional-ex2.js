"use strict";
console.log("(1st question)");
//1.Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = "Bruno";
if (isDog == "Bruno") console.log("pat,pat");
else {
  console.log("find me a dog to pat");
}

console.log("(2nd question)");
//2.Declare a variable named speedCheck. 
//If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. 
//If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speedCheck = 40;
let speedlimit = 50;
if (speedCheck > speedlimit) console.log("you are going to fast");
else {
  console.log("You re driving below the speed limit, Oma");
}

console.log("(3rd question)");
//3.Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 16;
if (age < 16) console.log("serve butter beer");
else {
  console.log("serve beer");
}

console.log("(4th question)");
//4.Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = "student";
if (isStudent === "student") console.log("Ticket costs 5 euros");
else {
  console.log("Ticket costs 12 euros");
}

console.log("(5th question)");
//Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let okMarie = 'chocolate cake'
if(okMarie.includes('cake')){
  console.log('Let them eat cake');
}else {
  console.log('Oh, bother');
}


console.log("(6th question)");
//6.Check if the following numbers are even numbers. 
//Use a ternary and if the number is even print 30 is even, else print that it is odd.
let a = 30;
if(a%2===0){
  console.log(`${a} is even`);
}else {
  console.log(`${a} is odd`);
}
