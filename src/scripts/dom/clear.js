import { updateResearch } from "../components/searchBar.js";
export function clearCards(cardsContainer) {
    // Clear Cards to reset DOM
    cardsContainer.innerHTML = "";
}

export function clearSelectedFilter(selectedFilter) {
    selectedFilter.remove();
    updateResearch(); 
}