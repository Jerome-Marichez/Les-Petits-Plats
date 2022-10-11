import { recipes } from "../data/recipes.js";
import { displayCards, displaySelectedFilter } from "../dom/display.js";
import { clearCards, clearSelectedFilter } from "../dom/clear.js";
import { searchAlgo } from "../algo/algo.js";

const cardsContainer = document.querySelector(".cards-container");
const searchBar = document.getElementById("recipeSearch");

export function updateResearch() {
    // Update Research 
    clearCards(cardsContainer);

    const searchRequest = searchBar.value.toLowerCase(); // + getSelectedFilter();
    console.log(searchRequest);

    const returnRequest = searchAlgo(recipes, searchRequest);
    displayCards(returnRequest, cardsContainer);
}

export function addListenerSearchBar() {
    searchBar.addEventListener('input', function () {
        updateResearch();
    });
}

export function addListenerGroupFilter(filterSelector) {
    // Manage open,click group filter 
    let isOpen = false;

    filterSelector.addEventListener('click', function () {
        const filterGroup = document.querySelectorAll(".filter");
        filterGroup.forEach(element => {
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

export function addListenerSelectedFilter(filterList, classSelectedFilter) {
    // Listen if we click on a item inside one of the 3 group of filter 


    filterList.forEach(p => {
        p.addEventListener('click', function () {
            const alreadySelectedFilters = getSelectedFilter();
            const itemValue = p.firstChild.nodeValue.toLowerCase();
            const isFilterSelected = alreadySelectedFilters.includes(itemValue);



            if (!isFilterSelected) {
                const selectedFilter = displaySelectedFilter(".selected_filter", classSelectedFilter, itemValue);
                const closeButton = document.querySelector(`#${selectedFilter} img`);

                closeButton.addEventListener("click", function () {
                    clearSelectedFilter(document.getElementById(selectedFilter));
                });

                updateResearch();
            }

        });

    });

}

export function getSelectedFilter() {

    const selected_filter = document.querySelectorAll(".selected_filter p");
    let filtersValue = " ";
    selected_filter.forEach(p => {

        filtersValue += p.innerHTML + " ";

    });

    // Return all filter selected in one request seperate by " "
    return filtersValue;
}


