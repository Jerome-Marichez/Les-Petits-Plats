import { clearCards } from "../dom/display.js";

export function addListenerSearchBar(searchBarID) {
    const mySearchBar = document.getElementById(searchBarID); 
    mySearchBar.addEventListener('input', function (evt) {
        somethingResearched(this.value);
    });
}

export function somethingResearched(value) {
    
}

