// A function definition is a regular binding where the value of the binding is a function

const square = function(x) {
  return x * x;
};

console.log(square(12)) // 144

// A function can have multiple paramteters or no parameters

const makeNoise = function() {
  console.log("Pling!");
};

makeNoise(); // function call

const power = function(base, exponent) {

  let result = 1;

  for (let count = 0; count < exponent; count++) { // For every time that count is inferior to exponent, we do:
    result *= base; // result is multiplied himself into base
  } // count is added 1 and we loop if again if the condition is true

  return result; // Once the loop is finished we return the result
}

// * A return statement determines the value the function returns

console.log(power(2,10)); // 1024

// * BINDINGS AND SCOPES

/* Bindings created for function parameters or declared inside a fnuction can be referenced only in that function */

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z); // 60
}

console.log(x + z); // 40 since y is not visible here

// When multiple bindings have the same name, JS can see only the innermost one

const halve = function(n) {
  return n / 2;
};

let n = 10;

console.log(halve(100)); // 50
console.log(n); // 10
console.log(halve(n)); //5

// *NESTED SCOPES