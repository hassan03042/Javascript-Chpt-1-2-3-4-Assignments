//answer 1

// Prompting the user to enter a character (number or string)
var input = prompt("Enter a character:");

// Checking whether the input is a number, uppercase letter, or lowercase letter
if (!isNaN(input)) {
  document.write("The input is a number.");
} else if (input >= "A" && input <= "Z") {
  document.write("The input is an uppercase letter.");
} else if (input >= "a" && input <= "z") {
  document.write("The input is a lowercase letter.");
} else {
  document.write("Invalid input.");
}

//answer 2

// Prompting the user for input
// Prompting the user for input
var integer1 = parseInt(prompt("Enter the first integer:"));
var integer2 = parseInt(prompt("Enter the second integer:"));

// Comparing the integers and displaying the result
if (integer1 > integer2) {
  document.write("The larger number is: " + integer1);
} else if (integer2 > integer1) {
  document.write("The larger number is: " + integer2);
} else {
  document.write("Both numbers are equal");
}

///asnwer 3

// Prompting the user for input
var number = parseFloat(prompt("Enter a number:"));

// Checking if the number is positive, negative, or zero and displaying the result
if (number > 0) {
  document.write("The number is positive.");
} else if (number < 0) {
  document.write("The number is negative.");
} else {
  document.write("The number is zero.");
}

///answer 4

// Function to check if a character is a vowel
function isVowel(char) {
  // Convert the character to lowercase to handle uppercase vowels as well
  char = char.toLowerCase();

  // Check if the character is a vowel (a, e, i, o, u)
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

// Prompting the user to enter a character
var inputCharacter = prompt("Enter a character:");

// Checking if the entered character is a vowel and displaying the result
var result = isVowel(inputCharacter);

if (result) {
  document.write("The character " + inputCharacter + " is a vowel.");
} else {
  document.write("The character " + inputCharacter + " is not a vowel.");
}

///answer 5

// Step 1: Store the correct password in a JavaScript variable
var correctPassword = "my love";

// Step 2: Prompt the user to enter their password
var enteredPassword = prompt("Enter your password:");

// Step 3: Validate the entered password
if (!enteredPassword) {
  // Check if the user has entered a password
  // If the user hasn't entered a password, display a message
  alert("Please enter your password");
} else if (enteredPassword === correctPassword) {
  // Check if the entered password matches the correct password
  // If the entered password matches the correct password, display a success message
  alert("Correct! The password you entered matches the original password");
} else {
  // If the entered password doesn't match the correct password, display an error message
  alert("Incorrect password");
}

///answer 6

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

///answer 7

// Prompting the user to enter time in 24-hour clock format

var time = parseInt(prompt("Enter the time (in 24-hour clock format):"));

// Checking the time and displaying the corresponding message
if (time >= 0 && time < 1200) {
  document.write("Good morning!");
} else if (time >= 1200 && time < 1700) {
  document.write("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
  document.write("Good evening!");
} else if (time >= 2100 && time <= 2359) {
  document.write("Good night!");
} else {
  document.write("Invalid time entered!");
}