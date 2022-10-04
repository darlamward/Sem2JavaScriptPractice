// Practice Problems 1
// Completed on: 09-27-2022
// Completed by: Darla Ward

// Practice Question 1
var label = "keyincollege";
var tld = "ca";
var domainName = label + "." + tld;
//Practice Question 2
if (domainName === "keyincollege.ca") {
  var isKeyin = true;
} else {
  var isKeyin = false;
}
//Practice Question 3
if (isKeyin === true) {
  var isNotKeyin = false;
} else {
  var isNotKeyin = true;
}
//Practice Question 4
var byte1 = 200;
var byte2 = 111;
var byte3 = 8;
var byte4 = 67;
//Practice Question 5
var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
//Practice Question 6
var integer = 2;

for (var i = 1; i < 11; i++) {
  product = integer * i;
  //  console.log(integer + " x " + i + " = " + product);
}
//Practice Question 7
for (var i = 1; i < 101; i++) {
  if (i % 2 == 0) {
    // i is even
    console.log(i + " even");
  } else {
    console.log(i + " odd");
  }
}
//Practice Question 8
totalSum = 0;

for (var i = 1; i < 101; i++) {
  if (i % 2 == 0) {
    // i is even
    console.log(i + " even");
    totalSum += i;
  } else {
    console.log(i + " odd");
  }
}
console.log(totalSum);
//Practice Question 9
var number = 25;
var hold = 0;

for (var i = 1; i <= number / 2; i++) {
  if (number % i === 0) {
    hold += i;
  }
}
if (hold === number && hold !== 0) {
  console.log("A Perfect Number");
} else {
  console.log("Not a Perfect Number.");
}
//Practice Question 10
var number = 3;
var isPrime = true;

if (number === 1) {
  console.log("1 is not a prime number.");
} else if (number > 1) {
  for (var i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is a not prime number.`);
  }
} else {
  console.log("The number is not a prime number.");
}
