import { recipes } from "./data/recipes.js";
import { displayCards, displayFilter } from "./dom/display.js";
import { addListenerSearchBar } from './components/searchBar.js'; // IMPORT SEARCH BAR FUNCTION 




// Function to init the code
function init() {

    // Display cards by default all cards since recipes is not modified 
    // at first load 
    const cardsContainer = document.querySelector(".cards-container");
    displayCards(recipes, cardsContainer);

    // Add listener to 3 filter lists when we click on 
    const filterList = document.querySelectorAll(".filter-list");
    displayFilter(recipes, filterList);

    // Add listener to SearchBar when we wrote something 
    const searchBar = document.getElementById("recipeSearch");
    addListenerSearchBar(recipes, searchBar, ".cards-container");
    
   
}

init();


