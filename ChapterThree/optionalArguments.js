// * Optional Arguments

// The following code is allowed and executes without any problem

function square(x) {
  return x * x;
};

console.log(square(4, true, "hedgehog"));

// This function ignores the two extra parameters, if you pass too many they will be IGNORED, however, if you pass too few, the missing parameters are UNDEFINED

function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(5))

// If you write an = operator after a parameter, followed by an expression, it will repalce it when te value is not given

