var currentList = recipes;
var ingredientList = [];
var appareilList = [];
var ustensilList = [];
var ingredientTags = [];
var appareilTags = [];
var ustensilTags = [];
var searchInput = '';

async function displayData(RecipeList) {
  var recipesSection = document.querySelector('.recipeContainer');
  recipesSection.innerHTML = '';

  if(RecipeList.length > 0){
    for (var i = 0; i < RecipeList.length; i++) {
      var recipeModel = recipeFactory(RecipeList[i]);
      var recipeCardDOM = recipeModel.getRecipeCardDOM();
      recipesSection.appendChild(recipeCardDOM);
    }
  }else{
    console.log('aie aie aie');
    var noRecipe = document.createElement('p');
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
var searchRecipe = document.querySelector('.searchBar');
searchRecipe.addEventListener('input', function(e) {
  var element = e.target.value.toLowerCase();
  if (element.length >= 3) {
    searchInput = element;
    filter(searchInput, ingredientTags, appareilTags, ustensilTags);
  } else {
    searchInput = '';
    filter(searchInput, ingredientTags, appareilTags, ustensilTags);
  }
});

// BUTTON
var dropdownIngredients = document.querySelector('.btnIngredients');
var dropdownAppareils = document.querySelector('.btnAppareils');
var dropdownUstensiles = document.querySelector('.btnUstensiles');
dropdownIngredients.addEventListener('click', function() {openDropdown('Ingredients')});
dropdownAppareils.addEventListener('click', function() {openDropdown('Appareils')});
dropdownUstensiles.addEventListener('click', function() {openDropdown('Ustensiles')});

var closeDropdownIngredients = document.querySelector('.closeDropdownIngredients');
var closeDropdownAppareils = document.querySelector('.closeDropdownAppareils');
var closeDropdownUstensiles = document.querySelector('.closeDropdownUstensiles');
closeDropdownIngredients.addEventListener('click', function() {closeDropdown('Ingredients', ingredientList)});
closeDropdownAppareils.addEventListener('click', function() {closeDropdown('Appareils', appareilList)});
closeDropdownUstensiles.addEventListener('click', function() {closeDropdown('Ustensiles', ustensilList)});

// SEARCHBAR Ingredients
filterTags('Ingredients', ingredientList);
filterTags('Appareils', appareilList);
filterTags('Ustensiles', ustensilList);
