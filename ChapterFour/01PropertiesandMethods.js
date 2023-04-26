// * Data sets

// We want to represent a collection of the numbers 2, 3, 5, 7 and 11

let listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 - 1]);

// * Properties

// The two main ways to access properties are with a dot (value.x) and with square brackets (value[x])

// * Methods

// Both string and array values contain, in addition to the .length property a number of properties that hold function values

let doh = "Doh";

console.log(typeof doh.toUpperCase); // function
console.log(doh.toUpperCase()); // DOH

// Properties that contain functions are generallh called methods of the values they belong to, as in "toUpperCase() is a method of a string"

let sequence = [1, 2, 3];
sequence.push(4); // [1, 2, 3, 4]
sequence.push(5); // [1, 2, 3, 4, 5]
sequence.pop(); // [1, 2, 3, 4]

