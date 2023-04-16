//  * Nested Scope

const hummus = function(factor) {

  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    
    if (ingredientAmount > 1) {
      unit += "s";
    }

    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(1);

// * This is an EXCELLENT idea for a Cooking project

// The code inside the ingredient() function can see the factor bvinding from the outer function

// The set of bindings visible inside a block is determined by the place of that block in the program text