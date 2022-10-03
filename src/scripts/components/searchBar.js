import { displayCards } from "../dom/display.js";
import { clearCards } from "../dom/clear.js";
import { searchAlgo } from "../algo/algo.js";

export function addListenerSearchBar(recipes, searchBar, cardsContainer) {
    searchBar.addEventListener('input', function () {
        updateResearch(recipes, this.value, cardsContainer);
    });
}
export function addListenerFilter(recipes,filter_container) { 
    // filter-open
}
export function updateResearch(recipes, inputValue, cardsContainer) {
    clearCards(cardsContainer);
    let filterRecipes = searchAlgo(recipes, inputValue.toLowerCase());
    displayCards(filterRecipes, cardsContainer);
}

