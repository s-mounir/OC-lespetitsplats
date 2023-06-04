function filter(searchInput, ingredientTags, appareilTags, ustensilTags) {
    const ingredientFilter = (searchInput !== undefined && searchInput !== '') ? [...ingredientTags, searchInput] : ingredientTags;
    // filtre des noms de recettes
    const recipeListName = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchInput));
    // filtre des ingrédients
    let recipeListIngredient = [];
    ingredientFilter.forEach((ingredient) => {
      const ingredientLC = ingredient.toLowerCase();
      const recipesFiltered = recipes.filter((recipe) =>
        recipe.ingredients.filter((elem) => elem.ingredient.toLowerCase().includes(ingredientLC))
          .length > 0);
  
      recipeListIngredient = recipeListIngredient.concat(recipesFiltered);
    });
    // filtre des descriptions
    const recipeListDescription = recipes.filter((recipe) =>
      recipe.description.toLowerCase().includes(searchInput));
  
    // filtre des appareils
    let recipeListAppareil = [];
    appareilTags.forEach((appareil) => {
      const appareilLC = appareil.toLowerCase();
      const recipesFiltered = recipes.filter((recipe) =>
        recipe.appliance.toLowerCase().includes(appareilLC));
      recipeListAppareil = recipeListAppareil.concat(recipesFiltered);
    });
    // filtre des ustensils
    let recipeListUstensil = [];
    ustensilTags.forEach((ustensil) => {
      const ustensilLC = ustensil.toLowerCase();
      const recipesFiltered = recipes.filter((recipe) => recipe.ustensils.join().toLowerCase().includes(ustensilLC));
      recipeListUstensil = recipeListUstensil.concat(recipesFiltered);
    });
  
    const concatList = recipeListName.concat(recipeListDescription).concat(recipeListIngredient)
      .concat(recipeListAppareil).concat(recipeListUstensil);
    const newRecipeList = concatList.filter((item, idx) => concatList.indexOf(item) === idx);
    displayData(newRecipeList);
    currentList = newRecipeList;
  }  