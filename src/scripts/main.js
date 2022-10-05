import { recipes } from "./data/recipes.js";
import { displayCards, displayFilter } from "./dom/display.js";
import { addListenerSearchBar, addListenerGroupFilter } from './components/searchBar.js'; // IMPORT SEARCH BAR FUNCTION 




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
    const searchBar = document.getElementById("recipeSearch");
    addListenerSearchBar(recipes, searchBar, cardsContainer);

    // Add listener to Filter when we click
    addListenerGroupFilter(document.getElementsByClassName("filter ingredients")[0]);
    addListenerGroupFilter(document.getElementsByClassName("filter appliances")[0]);
    addListenerGroupFilter(document.getElementsByClassName("filter ustensils")[0]);


}

init();


