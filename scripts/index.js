async function displayData(recipes) {
  const recipesSection = document.querySelector('.recipeContainer');

  recipes.forEach((recipe) => {
    const recipeModel = recipeFactory(recipe);
    const recipeCardDOM = recipeModel.getRecipeCardDOM();
    recipesSection.appendChild(recipeCardDOM);
  });
}

async function init() {
  // Récupère les datas des recettes
  console.log(recipes);
  displayData(recipes);
}

init();
