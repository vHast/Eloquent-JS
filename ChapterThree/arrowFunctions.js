// Instead of the function keyword we use an arrow (=>) to make it simpler

const power = (base, exponent) => {

  let result = 1;

  for (let count = 0; count < exponent; count++) {
    result *= base;
  }

  return result;
};

// The arrow comes after the list of parameters and is followed by the function's body

// When there is only one parameter, you can omit the parentheses around the parameter list

const square1 = x => x * x;

// When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses

const horn = () => {
  console.log("Toot");
};
