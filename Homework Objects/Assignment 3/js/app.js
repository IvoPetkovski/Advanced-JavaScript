let getRecipe = document.getElementById('getRecipe');
let form = document.getElementById('recipe');
let myTable = document.getElementById('table');
let render = document.getElementById('render');
let clearCards = document.getElementById('clearCards')

let recipeList = [];

function Recipe(recipeName, recipeIngredients, recipeInstructions) {
    this.recipeName = recipeName;
    this.recipeIngredients = recipeIngredients;
    this.recipeInstructions = recipeInstructions;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let recipeName = form.elements['recipeName'].value;
    let ingredients = form.elements['ingredients'].value;
    let instructions = form.elements['instructions'].value;
    ingredients = ingredients.split(',');
    for (let i = 0; i < ingredients.length; i++) {
        ingredients[i] = ingredients[i].trim();
    }
    let recipe = new Recipe(recipeName, ingredients, instructions);
    recipeList.push(recipe);
    console.log(recipeList);
    form.elements['recipeName'].value = '';
    form.elements['ingredients'].value = '';
    form.elements['instructions'].value = '';
})

function createCard(recipe){
    let card = $('<div class="card border-success mb-3" style="max-width: 18rem;"></div>')
    card.append(`<div class="card-header">${recipe.recipeName}</div>`);
    let cardBody = $('<div class="card-body text-success"></div>');
    let ulList = $('<ul></ul>');
    for (const ingredient of recipe.recipeIngredients) {
        ulList.append(`<li>${ingredient}</li>`)
    }
    cardBody.append(ulList);
    let instructions = $(`<div class="card-text">${recipe.recipeInstructions}</div>`);
    cardBody.append(instructions);
    card.append(cardBody);
    $('#recipeCards').append(card);
}

render.addEventListener('click', function(){
    $('#recipeCards').empty();
    for (const recipe of recipeList) {
        createCard(recipe);
    }
})

clearCards.addEventListener('click', function(){
    $('#recipeCards').empty();
    recipeList.length = 0;
})