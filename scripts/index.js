let currentList = [];
let ingredientList = [];
let appareilList = [];
let ustensilList = [];
let ingredientTags = [];
let appareilTags = [];
let ustensilTags = [];
let searchInput = '';

async function displayData(RecipeList) {
  const recipesSection = document.querySelector('.recipeContainer');
  recipesSection.innerHTML = '';

  if (RecipeList.length > 0) {
    RecipeList.forEach((recipe) => {
      const recipeModel = recipeFactory(recipe);
      const recipeCardDOM = recipeModel.getRecipeCardDOM();
      recipesSection.appendChild(recipeCardDOM);
    });
  } else {
    const noRecipe = document.createElement('p');
    noRecipe.classList.add('noRecipe');
    noRecipe.innerHTML = 'Aucune recette ne correspond à votre critère… <br/> Vous pouvez chercher « tarte aux pommes », « poisson », etc...';
    recipesSection.appendChild(noRecipe);
  }
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
  if (element.length >= 3) {
    searchInput = element;
    filter(searchInput, ingredientTags, appareilTags, ustensilTags);
  } else {
    searchInput = '';
    filter(searchInput, ingredientTags, appareilTags, ustensilTags);
  }
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
filterTags('Ingredients', ingredientList);
filterTags('Appareils', appareilList);
filterTags('Ustensiles', ustensilList);
