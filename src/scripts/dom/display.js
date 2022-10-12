
export async function displayFilter(recipes, filterList) {

    // This part of code allow to retrieve correct Filter Section Name Selector
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
    // End of this part of code


    // For each Filter Section we are going grab their unique list of filter items in tempory Array
    let appliancesTmp = [], ingredientsTmp = [], ustensilsTmp = [];
    recipes.forEach(recipe => {

        if (filterIngredients && recipe.ingredients) {
            let ingredients = recipe.ingredients;
            ingredients.forEach(element => {
                let ingredient = element.ingredient.toLowerCase();
                ingredient = ingredient.split(" "); // Split to get only first word

                if (ingredient[0].endsWith("s")) {
                    ingredient[0] = ingredient[0].slice(0, -1);
                }

                if (!ingredientsTmp.includes(ingredient[0])) { ingredientsTmp.push(ingredient[0]); }
            });
        }

        if (filterAppliances && recipe.appliance) {
            let appliance = recipe.appliance.toLowerCase();
            appliance = appliance.split(" "); // Split to get only first word

            if (appliance[0].endsWith("s")) {
                appliance[0] = appliance[0].slice(0, -1);
            }

            if (!appliancesTmp.includes(appliance[0])) { appliancesTmp.push(appliance[0]); }
        }

        if (filterUstensils && recipe.ustensils) {
            recipe.ustensils.forEach(element => {

                let ustensil = element.toLowerCase();
                ustensil = ustensil.split(" "); // Split to get only first word

                if (ustensil[0].endsWith("s")) {
                    ustensil[0] = ustensil[0].slice(0, -1);
                }
                
                if (!ustensilsTmp.includes(ustensil[0])) { ustensilsTmp.push(ustensil[0]); }
            });


        }
    });

    // end add filter name in their section

    // Sort by alphabetic
    ingredientsTmp.sort((a, b) => a.localeCompare(b));
    ustensilsTmp.sort((a, b) => a.localeCompare(b));
    appliancesTmp.sort((a, b) => a.localeCompare(b));
    // end sort by alphabetic


    // Remove all "space"
    ingredientsTmp.sort((a, b) => a.localeCompare(b));

    // BUILD LIST 
    ingredientsTmp.forEach(ingredient => {
        const ItemList = document.createElement('li');
        ItemList.classList.add('filter-list-item');
        ItemList.textContent = ingredient;
        filterIngredients.appendChild(ItemList);
    });
    ustensilsTmp.forEach(ustensil => {
        const ItemList = document.createElement('li');
        ItemList.classList.add('filter-list-item');
        ItemList.textContent = ustensil;
        filterUstensils.appendChild(ItemList);
    });
    appliancesTmp.forEach(appliances => {
        const ItemList = document.createElement('li');
        ItemList.classList.add('filter-list-item');
        ItemList.textContent = appliances;
        filterAppliances.appendChild(ItemList);
    });
    // END BUILD LIST 


}

export function displaySelectedFilter(container, classSelectedFilter, itemValue) {

    // Build the selected filter component 
    const selectedFilterContainer = document.createElement('div');
    const id = "close" + Math.floor(Math.random() * 10000); // Random ID
    selectedFilterContainer.id = id;
    selectedFilterContainer.classList.add("selected-filter");
    selectedFilterContainer.classList.add(classSelectedFilter);

    // insert value in our tag
    const selectedItemValue = document.createElement("p");
    selectedItemValue.textContent = itemValue;

    const closeIcon = document.createElement("img");
    closeIcon.setAttribute('src', "./assets/icons/circle-xmark-regular.svg");
    closeIcon.setAttribute('alt', "");


    selectedFilterContainer.appendChild(selectedItemValue);
    selectedFilterContainer.appendChild(closeIcon);

    //Append the filter component to our document 
    document.querySelector(container).appendChild(selectedFilterContainer);
    return id; // return the ID of the displayed Filter

    // End 

}

export async function displayCards(recipes, cardsContainer) {

    // This function generate all cards though the data parsed
    recipes.forEach(recipe => {
        const cardContainer = document.createElement('div');
        const cardHeader = document.createElement('div');
        const cardBody = document.createElement('div');
        const cardTitleContainer = document.createElement('div');
        const cardTitleText = document.createElement('h3');
        const cardDurationContainer = document.createElement("div");
        const cardDurationIcon = document.createElement("img");
        const cardDurationText = document.createElement("p");
        const cardIngredientsContainer = document.createElement("div");
        const cardIngredientsList = document.createElement('ul');
        const cardDescriptionContainer = document.createElement('div');
        const cardDescriptionText = document.createElement('p');


        cardContainer.classList.add('card');
        cardHeader.classList.add('card-header');
        cardBody.classList.add("card-body");

        cardTitleContainer.classList.add("title");
        cardDurationContainer.classList.add("time");

        cardDurationIcon.setAttribute('src', "./assets/icons/clock-regular.svg");
        cardDurationIcon.setAttribute('alt', "");


        cardIngredientsContainer.classList.add('ingredients');
        cardIngredientsList.classList.add('ingredients-list');

        cardDescriptionContainer.classList.add('description');


        cardTitleText.textContent = recipe.name;
        cardDurationText.textContent = `${recipe.time} min`;
        cardDescriptionText.textContent = recipe.description;


        cardContainer.appendChild(cardHeader);
        cardContainer.appendChild(cardBody);
        cardBody.appendChild(cardTitleContainer);
        cardTitleContainer.appendChild(cardTitleText);
        cardBody.appendChild(cardDurationContainer);
        cardDurationContainer.appendChild(cardDurationIcon);
        cardDurationContainer.appendChild(cardDurationText);
        cardBody.appendChild(cardIngredientsContainer);
        cardIngredientsContainer.appendChild(cardIngredientsList);

        recipe.ingredients.forEach((ingredient) => {
            const cardIngredientItem = document.createElement('li');
            cardIngredientItem.classList.add("ingredient");

            cardIngredientItem.innerHTML = `<span class="name">${ingredient.ingredient}</span> ${ingredient.quantity ? `: ${ingredient.quantity}` : "1"} ${ingredient.unit ? ingredient.unit === "grammes" || ingredient.unit === "gramme" ? "g" : ingredient.unit : ""}`;
            cardIngredientsList.appendChild(cardIngredientItem);
        });

        cardBody.appendChild(cardDescriptionContainer);
        cardDescriptionContainer.appendChild(cardDescriptionText);

        cardsContainer.appendChild(cardContainer);

    });


}