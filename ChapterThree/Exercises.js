// Write a function min that takes two arguments and returns their minimum


const min = (a, b) => {
  return Math.min(a,b);
}

console.log(min(5,10));
console.log(min(10,55))

// * Recursion

// Define a recursive function isEven that accepts a single parameter( a positive, whole number) and return a Boolean

const isEven = number => {

  let boolVal;

  if (number < 0) {
    Math.abs(number); // Changing number into positive
  }

  boolVal = number % 2 === 0; // Check if even
  return boolVal;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-4));

// Bean counting

// Write a function count Bs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters are there in the string

const countBs = string => {

  let newSplit = string.split('');
  let letterCount = 0;

  for (let i = 0; newSplit.length > i; i++) {
    if (newSplit[i] === "B") {
      letterCount++;
    }
  }
  console.log(letterCount);
}

countBs("Babylon"); // 1

// Write a function called countChar that behaves like countB except it takes a second argument that indicates the character that is to be counted

const countChar = (string, char) => {

  let newSplit = string.split('');
  let letterCount = 0;

  for (let i = 0; newSplit.length > i; i++) {
    if (newSplit[i] === char) {
      letterCount++;
    }
  }
  console.log(letterCount);
}

countChar("Kakkerlak", "k"); // 3