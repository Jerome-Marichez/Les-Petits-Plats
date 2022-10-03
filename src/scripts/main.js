import { recipes } from "./data/recipes.js";
import { displayCards } from "./dom/display.js";
import { addListenerSearchBar } from './components/searchBar.js'; // IMPORT SEARCH BAR FUNCTION 




// Function to init the code
function init() {
    
    // Display cards by default all cards since recipes is not modified 
    // at first load 
    displayCards(recipes, ".cards-container");
  
    // Add listener to SearchBar when we wrote something 
    const searchBar = document.getElementById("recipeSearch");
    addListenerSearchBar(recipes, searchBar, ".cards-container");
}

init();


