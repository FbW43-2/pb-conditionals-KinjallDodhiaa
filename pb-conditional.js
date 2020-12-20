"use strict";
//1.Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the range.
console.log("(1st & 2nd question)");
let x = 40;
let y = 60;
let z = 85;

if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
  console.log(true);
} else {
  console.log(false);
}

// //2.Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
console.log("(3rd question)");
//3. Declare the variables a, b and c, and give them number values. Check which one out of the three variables has the largest value and print it to the console. Then change the values of the variables to see if your conditional still works.
let a = 40;
let b = 20;
let c = 30;

let largestValue = Math.max(a, b, c);
console.log(largestValue);
if (a > b && a > c) {
  console.log(a);
} else if (b > c) {
  console.log(b);
} else {
  console.log(c);
}

console.log("(4th question)");
//4.Create a new string adding "Py" in front of a given string. If the given string begins with "Py" then print the original string.
let givenStr = "Pyramid";
let newStr = "Py" + givenStr;
let first2Char = givenStr.charAt(0) + givenStr.charAt(1);
if (first2Char === "Py") {
  console.log(givenStr);
} else {
  console.log(newStr);
}

console.log("(5th question)");
//5.Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80.
let sum = x + y;
console.log(sum);
if (sum >= 50 && sum <= 80) console.log(65);
else {
  console.log(80);
}

console.log("(7th question)");
//7.Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true.
let num1 = 10;
let num2 = 7;
if (num1 || num2 == 15 || num1 + num2 == 15) console.log(true);

console.log("(8th question)");
//8.Check whether one of two integers is a multiple of 7 or 11. If so, print true.
//taking values num1 & num2 from question 7
if (num1 % 7 === 0 || num1 % 11 === 0 || num2 % 7 === 0 || num2 % 11 === 0)
  console.log(true);
else {
  console.log(false);
}

console.log("(9th question)");
//9.9.Calculate the sum of the two given integers. If the two values are the same, then print triple their sum.
//Again taking num1 and num2 from question7
let total = num1 + num2;
if (num1 === num2) console.log(3 * total);
else {
  console.log("num1 and num2 are not equal");
}

let apple = 10;
let banana = 10;
let totalFruits = apple + banana;
if (apple === banana) console.log(3 * totalFruits);
else {
  console.log("not equal");
}

console.log("(10th question)");
//10.Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.
let specifiedNumber = 39;
let givenNumber = 19;
let difference = specifiedNumber - givenNumber;
console.log(difference);
if (specifiedNumber > givenNumber) console.log(2 * difference);
else {
  nothing;
}

console.log("(11th question)");
//11.BONUS CHALLENGE: Make a variable for firstName and age and give each variable values.
//Create an if/else statement to check whether the person's age is less than 13.
// If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult".
let firstName = "Kinjal";
let Age = 18;

if (Age < 13) {
  console.log(firstName + "" + "is a child.");
} else if (Age > 13 && Age < 20) {
  console.log(firstName + "" + "is a teenager");
} else if (Age > 20 && Age < 30) {
  console.log(firstName + "is a young adult");
} else {
  console.log(firstName + "is an adult");
}
