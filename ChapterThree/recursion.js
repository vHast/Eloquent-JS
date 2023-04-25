// * Recursion

function power(base, exponent) {
  
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

// If the exponent is zero, we will return 1, however if it's not we will return the base * power (base, exponent - 1) and return to the function

// The syntax for recursive function

function recurse() {
  recurse();
}

// recurse() // It will overflow the stack since its not finished

// A recursive function is a function that calls itself, it must have a condition to stop itself, otherwise, its called indefinetly

function countDown (number) {

  console.log(number);
  const newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber)
  }
}
let number = 5;

countDown(number); // 5, 4, 3, 2, 1

function factorial(x) {

  // if number is 0
  if (x === 0) {

    return 1;

  // if number is positive
  } else {
    return x * factorial(x - 1);
    
  }
}
console.log(factorial(4)); // 24

// 4 + 3 + 2 + 1 = 24