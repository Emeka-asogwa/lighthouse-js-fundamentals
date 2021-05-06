const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");

/* We can combine the two statements into one by using if else statement */

if (cold){
  console.log('Make sure you pick out a scarf!');
}else{
  console.log('Short sleeves are fine');
}

/* -------- We can also reduce the statement using if else statement 
especially where we have different conditions ------------------ */

const temperature = 13;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 14) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

/* -------- Logical operators------------ */

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (!raining) {
  console.log("Leave your umbrella at home!");
}
