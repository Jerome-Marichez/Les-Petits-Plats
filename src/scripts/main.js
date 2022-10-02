
import { recipes } from "./data/recipes.js"; // IMPORT DATA 
import { displayCards } from "./dom/display.js";


// Function to init the code
function init() {
    // Display cards by default all cards since recipes is not modified 
    // at first load 
    displayCards(recipes, ".cards-container");
   
}

init();


