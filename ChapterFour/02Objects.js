// * Objects

// Values of the type objects are arbitrary collections of properties

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"]
};

// When an object is written over multiple lines, indenting it helps readibility

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

console.log(anObject.left) // undefined 


// * To find out what properties an object has, you can use the Object.keys function, you give it an object and it returns an array of strings, the objects property names

let newKeys = {
  x: 0,
  y: 1,
  z: 2
}

console.log(Object.keys(newKeys));