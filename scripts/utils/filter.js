function filter(searchInput, ingredientTags) {
  const ingredientFilter = searchInput !== undefined ? [...ingredientTags, searchInput] : ingredientTags;
  // filtre les noms de recettes
  const recipeListName = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchInput));
  // filtre les ingrédients
  let recipeListIngredient = [];
  ingredientFilter.forEach((ingredient) => {
    const ingredientLC = ingredient.toLowerCase();
    const recipesFiltered = recipes.filter((recipe) =>
      recipe.ingredients.filter((elem) => elem.ingredient.toLowerCase().includes(ingredientLC))
        .length > 0);

    recipeListIngredient = recipeListIngredient.concat(recipesFiltered);
  });
  // filtre les descriptions
  const recipeListDescription = recipes.filter((recipe) =>
    recipe.description.toLowerCase().includes(searchInput));
  const concatList = recipeListName.concat(recipeListDescription).concat(recipeListIngredient);
  const newRecipeList = concatList.filter((item, idx) => concatList.indexOf(item) === idx);
  displayData(newRecipeList);
  currentList = newRecipeList;
  //console.log(recipeListIngredient);
  console.log(ingredientFilter);
}
