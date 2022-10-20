// Algo Modern
export function searchAlgo(recipes, input) {
    return recipes.filter(
        (recipe) =>
        (
            recipe.name.toLowerCase().includes(input)
            ||
            recipe.ingredients.some((ingredient) => ingredient.ingredient.toLowerCase() === input)
            ||
            recipe.description.toLowerCase().includes(input)
        )
    );
};
// Fin Algo Modern