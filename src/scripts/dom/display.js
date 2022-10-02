export function displayCards(recipes, selector) {
    // This function get the data and generate all cards though the data parsed
    recipes.forEach(recipe => {
        const cardsContainer = document.querySelector(selector);
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