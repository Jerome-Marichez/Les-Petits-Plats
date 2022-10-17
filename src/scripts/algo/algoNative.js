export function searchAlgo(recipes, input) {

    const recipesFiltered = [];


    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const recipeName = recipe.name.toLowerCase();
        const recipeDescription = recipe.description.toLowerCase();

        // Regex to check if description or name = input.
        const regex = new RegExp('(?:^|\\s)' + input.toLowerCase(), 'i');
        const isNameContains = regex.test(recipeName);
        const isDescriptionContains = regex.test(recipeDescription);

        // If input contains  Ingredients, Name, Description contains then PUSH
        for (let i = 0; i < recipe.ingredients.length; i++) {
            const ingredients = recipe.ingredients[i];

            const isIngredientContains = regex.test(ingredients.ingredient);

            if (isIngredientContains || isNameContains || isDescriptionContains) {
                recipesFiltered.push(recipe);
            }

        }
    }


    return [...new Set(recipesFiltered)];


};

