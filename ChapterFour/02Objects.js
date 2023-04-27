// * Objects

// Values of the type objects are arbitrary collections of properties

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

// When an object is writtern over multiple lines, indenting it helps readibility

let descriptions = {
  work: "Went to work",
  "touched tree": "Touched a tree"
};

console.log(descriptions["touched tree"]);

// This means braces have two meaning in JavaScript, at the start of a statement they start a block of statements, in the other position, they describe an object

// Reading a property that doesn't exist will give you the value undefined

// * The delete operator

let anObject = {
  left: 1,
  right: 2
};

delete anObject.left;
console.log(anObject.left) // undefined