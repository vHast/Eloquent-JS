// * Functions as Values

// It is possible to store a function value in a new binding, pass it as an argument to a function and so on

let safeMode = false;

let missileSystem = {
  launch : "none",
  type: "JET-52"
}
let launchMissiles = function() {
  missileSystem.launch("now");
  console.log(missileSystem.launch);
};

if (safeMode) {
  launchMissiles = function() { /* Do nothing*/}
}

launchMissiles();

// Function was modified