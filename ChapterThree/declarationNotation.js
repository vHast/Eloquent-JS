// * Declaration notation

function square(x) {
  return x * x;
}

// This is a function declaration, the statement defines the binding square and points it at the given direction

console.log("The future says", future());

function future() {
  return "You'll never have flying cars";
}

// This works, even if the function is defined below the code that uses it

// Function declarations are not part of the regular top-to-bottom flow of control, they are moved to the top of their scope and can be used by all the code in that scope
