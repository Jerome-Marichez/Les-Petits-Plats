import { recipes } from "../data/recipes.js";
import { displayCards, displayFilter, displaySelectedFilter } from "../dom/display.js";
import { clearCards, clearFilter, clearSelectedFilter } from "../dom/clear.js";
import { searchAlgo } from "../algo/algo.js";


const cardsContainer = document.querySelector(".cards-container");
const filterList = document.querySelectorAll(".filter-list");
const searchBar = document.getElementById("recipeSearch");

export function updateResearch() {
    // Update Research 
    clearCards(cardsContainer);
    clearFilter(filterList);

    //Group Filter DOM 
    // Filter request 
    const filterRequest = getSelectedFilter();


    // Search request 
    let searchRequest = searchBar.value.toLowerCase();
    if (searchRequest.length < 3) {
        // We do a search request only if length > 3
        searchRequest = "";

    }

    const returnSearchRequest = searchAlgo(recipes, searchRequest); // Search Request
    let finalRequest = returnSearchRequest; // Final Request by default = Search Request


    // Update filter items <li> depend of searchRequest
    displayFilter(returnSearchRequest, filterList);



    // Filter code
    if (filterRequest.length >= 1) { // IF Filter request asked

        finalRequest = []; // FinalRequest is set back to 0 since we are going filter though filter 

        returnSearchRequest.forEach(recipe => {


            let isFilterOk = [];

            const ingredients = recipe.ingredients;
            const appliances = recipe.appliance;
            const ustensils = recipe.ustensils;


            filterRequest.forEach(function (filterSearched) {
                filterSearched = filterSearched.toLowerCase();


                if (filterSearched.length > 1) {


                    // We got each filterSearch to be loop to see if it's inside each Recipe
                    if (ingredients) {
                        let ingredientFound = 0;

                        ingredients.forEach(element => {

                            const ingredient = element.ingredient.toLowerCase();

                            if (ingredientFound === 0) {
                                if (ingredient.toLowerCase().includes(filterSearched)) {
                                    isFilterOk.push("true");
                                    ingredientFound = 1;
                                }
                            }


                        });

                    }

                    if (appliances) {

                        if (appliances.toLowerCase().includes(filterSearched)) {
                            isFilterOk.push("true");
                        }

                    }

                    if (ustensils) {
                        ustensils.forEach(element => {
                            if (filterSearched.includes(element.toLowerCase())) {
                                isFilterOk.push("true");
                            }


                        });
                    }




                }
            });




            if (isFilterOk.length === filterRequest.length) {
                finalRequest.push(recipe);
                isFilterOk = [];
            }


        });

    }
    // End Filter Code

    console.log(finalRequest);


    displayCards(finalRequest, cardsContainer);
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
    let filtersValue = [];
    selected_filter.forEach(p => {

        filtersValue.push(p.innerHTML.toLowerCase());

    });

    // Return all filter selected in one request seperate by " "
    return filtersValue;
}


