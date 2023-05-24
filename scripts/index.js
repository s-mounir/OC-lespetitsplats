let currentList = [];
let ingredientList = [];

async function displayData(RecipeList) {
  const recipesSection = document.querySelector('.recipeContainer');
  recipesSection.innerHTML = "";

  RecipeList.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  });
}

async function init() {
  // Récupère les datas des recettes
  displayData(recipes);
  currentList = recipes;
}

init();

// SEARCHBAR
const searchRecipe = document.querySelector('.searchBar');
searchRecipe.addEventListener('input', (e) => {
  const element = e.target.value.toLowerCase();
  const recipeListName = recipes.filter((recipe) => recipe.name.toLowerCase().includes(element));
  const recipeListIngredient = recipes.filter((recipe) =>
    recipe.ingredients.filter((elem) =>
      elem.ingredient.toLowerCase().includes(element))
      .length > 0);
  const recipeListDescription = recipes.filter((recipe) =>
    recipe.description.toLowerCase().includes(element));
  const concatList = recipeListName.concat(recipeListDescription).concat(recipeListIngredient);
  const newRecipeList = concatList.filter((item, idx) => concatList.indexOf(item) === idx);
  displayData(newRecipeList);
  currentList = newRecipeList;
});

// BUTTON
const dropdownIngredients = document.querySelector('.btnIngredients');
const btnAppareils = document.querySelector('.btnAppareils');
const btnUstensiles = document.querySelector('.btnUstensiles');

dropdownIngredients.addEventListener('click', openDropdown);

const closeDropdownIngredients = document.querySelector('.closeDropdownIngredients');
closeDropdownIngredients.addEventListener('click', closeDropdown);
