let currentList = [];
let ingredientList = [];
let ingredientTags = [];
let searchInput;

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
  searchInput = element;
  filter(searchInput, ingredientTags);
});

// BUTTON
const dropdownIngredients = document.querySelector('.btnIngredients');
const btnAppareils = document.querySelector('.btnAppareils');
const btnUstensiles = document.querySelector('.btnUstensiles');

dropdownIngredients.addEventListener('click', openDropdown);

const closeDropdownIngredients = document.querySelector('.closeDropdownIngredients');
closeDropdownIngredients.addEventListener('click', closeDropdown);
