function greet (who) {
  console.log("Hello" + who);
};

greet("Harry");
console.log("Bye");

// The place were a computer stores his context is called the call stack, every time a function is called, the current context is stored on top of this stack

// When a function returns, it removes the top context from the stack and uses the context to continue execution

function chicken() {
  return egg();
}

function egg() {
  return chicken();
}

console.log(chicken() + " came first." ) // Maximum call stack size exceeded