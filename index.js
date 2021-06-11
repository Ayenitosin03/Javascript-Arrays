let recipes=[{
       food:"Beans",
       ingredient:["Pepper","chicken"]
    },
    {
        food:"Rice",
        ingredient:  ["water","Onions"]
    },
    {
        food:"Spag",
       ingredient:  [ "pepper","groundnutoil"]
    },
    {
        food:"salad",
        ingredient:  ["water","Onions"]
    }
    ];
    
    // creating a function that adds a recipe to an array;
     function addRecipeToRecipes(){
     let recipe={
         food:"yam",
         ingredient:["maggi","chicken"]
     }
     recipes.push(recipe);
     return recipes;
    }
  console.log(addRecipeToRecipes());

    // Find all the recipes that are rice recipes
  let riceRecipe = recipes.find(recipe => recipe.food==="Rice");
  console.log(riceRecipe);

//   Add salt as an ingredient to all recipes
  let addSalt = recipes.forEach(recipe=>recipe.ingredient.push("salt"));
  console.log(recipes);

//   Removes salt as an ingredient
 let removeSalt = recipes.forEach(recipe=>recipe.ingredient.pop("salt"));
 console.log(recipes);

//  Returns the most recently added recipe
  let recentRecipe = recipes[recipes.length-1];
  console.log("recent =>" , recentRecipe)

//   Find a salad recipe
   let saladRecipe = recipes.find(recipe => recipe.food==="salad")
   console.log("salad =>" , saladRecipe)

//    adds a recipe at the front of the array
// unshift adds one or more elements to the beginning of an array.
    let addNewRecipe = {food:"yam and egg", ingredient:["yam","egg","pepper"]};
    let newRecipe = recipes.unshift(addNewRecipe);
    console.log("newrecipe =>",addNewRecipe)

     // Adds a recipe at a specified index (index, recipe)
     // Splice changes the contents of an array by removing or replacing existing elements
     let addRecipeToIndex= recipes.splice(4,0,{type:'Fried Rice',ingredient:["green beans","carrot","colouring"]});
     console.log(recipes)

    //  edits a recipe at a particular index
    let editRecipeAtIndex= recipes.splice(4,1,{type:'spicy Rice',ingredient:["cucumber","carrot","colouring"]});
     console.log(recipes)
