import { recipes } from "./data/recipes.js";
import { displayCards, displayFilter } from "./dom/display.js";

import { addListenerSearchBar, addListenerGroupFilter, addListenerSelectedFilter }
    from './components/searchBar.js'; // IMPORT SEARCH BAR FUNCTION 




// Function to init the code
function init() {

    // Display cards by default all cards since recipes is not modified 
    // at first load 
    const cardsContainer = document.querySelector(".cards-container");
    displayCards(recipes, cardsContainer);

    // Load filter items in their lists
    const filterList = document.querySelectorAll(".filter-list");
    displayFilter(recipes, filterList);

    // Add listener to SearchBar when we wrote something 
    addListenerSearchBar();

    // Add listener to Filter when we click
    const groupFilterIngredients = document.getElementsByClassName("filter ingredients")[0];
    const groupFilterAppliances = document.getElementsByClassName("filter appliances")[0];
    const groupFilterUstensils = document.getElementsByClassName("filter ustensils")[0];

    addListenerGroupFilter(groupFilterIngredients);
    addListenerGroupFilter(groupFilterAppliances);
    addListenerGroupFilter(groupFilterUstensils);

    const ingredientsList = document.querySelectorAll(".list-ingredients li");
    addListenerSelectedFilter(ingredientsList, "ingredient");

    const ustensilsList = document.querySelectorAll(".list-ustensils li");
    addListenerSelectedFilter(ustensilsList, "ustensil");

    const applianceslist = document.querySelectorAll(".list-appliances li");
    addListenerSelectedFilter(applianceslist, "appliance");

}

init();


