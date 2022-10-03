import { clearCards, displayCards } from "../dom/display.js";
import { searchAlgo } from "../algo/algo.js";

export function addListenerSearchBar(recipes,searchBar,cardsContainer) {
    searchBar.addEventListener('input', function (evt) {
        somethingResearched(recipes, this.value, cardsContainer);
    });
}

export function somethingResearched(recipes, inputValue, cardsContainer) {
    clearCards(cardsContainer);
    let filterRecipes = searchAlgo(recipes, inputValue.toLowerCase()); 
    displayCards(filterRecipes,cardsContainer); 
}

