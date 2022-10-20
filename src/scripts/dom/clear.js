import { updateResearch } from "../components/searchBar.js";
export function clearCards(cardsContainer) {
    // Clear Cards to reset DOM
    cardsContainer.innerHTML = "";
}

export function clearFilter(filterList) {
    let filterAppliances = false, filterUstensils = false, filterIngredients = false;

    filterList.forEach(element => {
        console.log(element);
        if (element.className.includes("appliances")) {
            filterAppliances = document.getElementsByClassName(element.className)[0];
        }
        if (element.className.includes("ustensils")) {
            filterUstensils = document.getElementsByClassName(element.className)[0];
        }
        if (element.className.includes("ingredients")) {
            filterIngredients = document.getElementsByClassName(element.className)[0];
        }
    });

    filterAppliances.innerHTML = "";
    filterUstensils.innerHTML = "";
    filterIngredients.innerHTML = "";
}

export function clearSelectedFilter(selectedFilter) {
    selectedFilter.remove();
    updateResearch();
}