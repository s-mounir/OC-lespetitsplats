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
}

init();

const searchRecipe = document.querySelector('.searchBar');
searchRecipe.addEventListener('input', (e) => {
  const element = e.target.value.toLowerCase();
  const newRecipeList = recipes.filter((recipe) => recipe.name.toLowerCase().includes(element));
  displayData(newRecipeList);
});
