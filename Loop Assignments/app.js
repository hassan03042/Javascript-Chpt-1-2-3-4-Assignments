//Q1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Q2

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//Q3

for (let i = 1; i <= 15; i += 2) {
    console.log(i);
}

//Q4

let umber = 5;
let factorial = 1;

for (let i = 1; i <= umber; i++) {
    factorial *= i;
}

console.log("The factorial of " + umber + " is: " + factorial);

//Q5

let number = 7;

console.log("Multiplication table of " + number + ":");

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

//Q8
let str = "hello";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log("The reverse of the string '" + str + "' is: " + reversedStr);

//Q9

for (let i = 1; i <= 10; i++) {
    let square = i * i;
    console.log("Square of " + i + " is: " + square);
}


//Q10

let array = [3, 7, 2, 9, 5];
let largest = array[0]; // Assume the first element is the largest

for (let i = 1; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}

console.log("The largest element in the array is: " + largest);



