let currentList = [];
let ingredientList = [];
let appareilList = [];
let ustensilList = [];
let ingredientTags = [];
let appareilTags = [];
let ustensilTags = [];
let searchInput;

async function displayData(RecipeList) {
  const recipesSection = document.querySelector('.recipeContainer');
  recipesSection.innerHTML = '';

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
  filter(searchInput, ingredientTags, appareilTags, ustensilTags);
});

// BUTTON
const dropdownIngredients = document.querySelector('.btnIngredients');
const dropdownAppareils = document.querySelector('.btnAppareils');
const dropdownUstensiles = document.querySelector('.btnUstensiles');

dropdownIngredients.addEventListener('click', () => openDropdown('Ingredients', ingredientList));
dropdownAppareils.addEventListener('click', () => openDropdown('Appareils', appareilList));
dropdownUstensiles.addEventListener('click', () => openDropdown('Ustensiles', ustensilList));

const closeDropdownIngredients = document.querySelector('.closeDropdownIngredients');
const closeDropdownAppareils = document.querySelector('.closeDropdownAppareils');
const closeDropdownUstensiles = document.querySelector('.closeDropdownUstensiles');
closeDropdownIngredients.addEventListener('click', () => closeDropdown('Ingredients', ingredientList));
closeDropdownAppareils.addEventListener('click', () => closeDropdown('Appareils', appareilList));
closeDropdownUstensiles.addEventListener('click', () => closeDropdown('Ustensiles', ustensilList));

// SEARCHBAR Ingredients
const searchIngredients = document.querySelector('.searchBarIngredients');
searchIngredients.addEventListener('input', (e) => {
  const element = e.target.value.toLowerCase();

  const ulIngredients = document.querySelector('.listIngredients');
  ulIngredients.innerHTML = '';
  ingredientList = ingredientList.filter((ing) => ing.toLowerCase().includes(element));
  const ingredientListUniq = [...new Set(ingredientList)];
  ingredientListUniq.forEach((ing) => {
    const listElement = document.createElement('li');
    listElement.innerText = ing;
    ulIngredients.append(listElement);
    listElement.addEventListener('click', () => addTag(ing, 'Ingredients'));
  });
});
