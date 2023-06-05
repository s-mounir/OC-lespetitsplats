function filter(searchInput, ingredientTags, appareilTags, ustensilTags) {
  const searchInputLC = searchInput.toLowerCase();
  console.log(searchInputLC);

  const recipeFiltered = [];

  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];
    // filtre des ingredients de recettes
    const ingIsPresent = [];
    let ingSearchIsPresent = false;
    for (let k = 0; k < recipe.ingredients.length; k++) {
      const ingredient = recipe.ingredients[k].ingredient.toLowerCase();
      if (ingredient.match(searchInputLC)) {
        ingSearchIsPresent = true;
      }
      for (let j = 0; j < ingredientTags.length; j++) {
        const ingredientTag = ingredientTags[j].toLowerCase();
        if (ingredientTag === ingredient) {
          ingIsPresent.push(ingredientTag);
        }
      }
    }
    // filtre des appareils
    const appIsPresent = [];
    for (let j = 0; j < appareilTags.length; j++) {
      const appareilTag = appareilTags[j].toLowerCase();
      const appareil = recipe.appliance.toLowerCase();
      if (appareilTag === appareil) {
        appIsPresent.push(appareilTag);
      }
    }
    // filtre des ustensils
    const ustIsPresent = [];
    for (let j = 0; j < ustensilTags.length; j++) {
      const ustensilTag = ustensilTags[j].toLowerCase();
      for (let k = 0; k < recipe.ustensils.length; k++) {
        const ustensil = recipe.ustensils[k].toLowerCase();
        if (ustensilTag === ustensil) {
          ustIsPresent.push(ustensilTag);
        }
      }
    }

    // filtre des noms de recettes
    let nameIsPresent = false;
    if (recipe.name.toLowerCase().match(searchInputLC)) {
      nameIsPresent = true;
    }

    // filtre des descriptions
    let descIsPresent = false;
    if (recipe.description.toLowerCase().match(searchInputLC)) {
      descIsPresent = true;
    }

    // si recette correspond au filtre => sauvegarde
    if (ingIsPresent.length === ingredientTags.length
      && appIsPresent.length === appareilTags.length
      && ustIsPresent.length === ustensilTags.length
      && (nameIsPresent || descIsPresent || ingSearchIsPresent)) {
        recipeFiltered.push(recipe);
    }
  }

  console.log(recipeFiltered);
  displayData(recipeFiltered);
  currentList = recipeFiltered;
}
