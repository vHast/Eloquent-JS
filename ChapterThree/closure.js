// * Closure

// This function defines wrapValue, that creates a local binding, it then returns a function that accesses and returns this local binding

function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(5);

console.log(wrap1()); // 1
console.log(wrap2()); // 5

// Both instances of the binding can still be accessed, local bindings are created anew for every call

// A function that references bindings from local scopes is called a CLOSURE

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5))

// Multiplier is called and creates an environmient in which factor parameter is bound to 2

// The function value it returns which is stored in twice remembers this environment, so when its called, multiplies its argument by 2