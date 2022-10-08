import { displayCards } from "../dom/display.js";
import { clearCards } from "../dom/clear.js";
import { searchAlgo } from "../algo/algo.js";

export function addListenerSearchBar(recipes, searchBar, cardsContainer) {
    searchBar.addEventListener('input', function () {
        updateResearch(recipes, this.value, cardsContainer);
    });
}
export function addListenerGroupFilter(filterSelector) {
    let isOpen = false;

    filterSelector.addEventListener('click', function () {
        const test = document.querySelectorAll(".filter");
        test.forEach(element => {
            console.log(element);
            element.classList.remove("filter-open");
        });
        if (isOpen) {
            isOpen = false;
        }
        else {
            filterSelector.classList.add("filter-open");
            isOpen = true;
        }
    });
}
export function updateResearch(recipes, inputValue, cardsContainer) {
    clearCards(cardsContainer);
    let filterRecipes = searchAlgo(recipes, inputValue.toLowerCase());
    displayCards(filterRecipes, cardsContainer);
}

