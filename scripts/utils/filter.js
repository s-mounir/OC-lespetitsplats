function filter(searchInput, ingredientTags, appareilTags, ustensilTags) {
  const searchInputLC = searchInput.toLowerCase();
  console.log(searchInputLC);

  // filtre des noms de recettes
  const recipeListName = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchInputLC));

  // filtre des descriptions
  const recipeListDescription = recipes.filter((recipe) =>
    recipe.description.toLowerCase().includes(searchInputLC));

  // filtre des ingrédients
  const recipesFiltered = recipes.filter((recipe) =>
    recipe.ingredients.filter((elem) => elem.ingredient.toLowerCase().includes(searchInputLC))
      .length > 0);

  const concatList = recipeListName.concat(recipeListDescription).concat(recipesFiltered);

  let recipeListIngredient = [];
  ingredientTags.forEach((ingredient) => {
    const ingredientLC = ingredient.toLowerCase();
    const recipesFiltered = concatList.filter((recipe) =>
      recipe.ingredients.filter((elem) => elem.ingredient.toLowerCase().includes(ingredientLC))
        .length > 0);

    recipeListIngredient = recipeListIngredient.concat(recipesFiltered);
  });
  const IngredientFilterResult = recipeListIngredient.length > 0 ? recipeListIngredient : concatList;

  // filtre des appareils
  let recipeListAppareil = [];
  appareilTags.forEach((appareil) => {
    const appareilLC = appareil.toLowerCase();
    const recipesFiltered = IngredientFilterResult.filter((recipe) =>
      recipe.appliance.toLowerCase().includes(appareilLC));
    recipeListAppareil = recipeListAppareil.concat(recipesFiltered);
  });
  const AppareilFilterResult = recipeListAppareil.length > 0 ? recipeListAppareil : IngredientFilterResult;

  // filtre des ustensils
  let recipeListUstensil = [];
  ustensilTags.forEach((ustensil) => {
    const ustensilLC = ustensil.toLowerCase();
    const recipesFiltered = AppareilFilterResult.filter((recipe) => recipe.ustensils.join().toLowerCase().includes(ustensilLC));
    recipeListUstensil = recipeListUstensil.concat(recipesFiltered);
  });
  const UstensilFilterResult = recipeListUstensil.length > 0 ? recipeListUstensil : AppareilFilterResult;

  const newRecipeList = UstensilFilterResult.filter((item, idx) => UstensilFilterResult.indexOf(item) === idx);
  displayData(newRecipeList);
  currentList = newRecipeList;
}
