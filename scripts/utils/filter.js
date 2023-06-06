function filter(searchInput, ingredientTags, appareilTags, ustensilTags) {
  var searchInputLC = searchInput.toLowerCase();

  var recipeFiltered = [];

  for (var i = 0; i < recipes.length; i++) {
    var recipe = recipes[i];
    // filtre des ingredients de recettes
    var ingIsPresent = [];
    var ingSearchIsPresent = false;
    for (var k = 0; k < recipe.ingredients.length; k++) {
      var ingredient = recipe.ingredients[k].ingredient.toLowerCase();
      if (ingredient.match(searchInputLC)) {
        ingSearchIsPresent = true;
      }
      for (var j = 0; j < ingredientTags.length; j++) {
        var ingredientTag = ingredientTags[j].toLowerCase();
        if (ingredientTag === ingredient) {
          ingIsPresent.push(ingredientTag);
        }
      }
    }
    // filtre des appareils
    var appIsPresent = [];
    for (var j = 0; j < appareilTags.length; j++) {
      var appareilTag = appareilTags[j].toLowerCase();
      var appareil = recipe.appliance.toLowerCase();
      if (appareilTag === appareil) {
        appIsPresent.push(appareilTag);
      }
    }
    // filtre des ustensils
    var ustIsPresent = [];
    for (var j = 0; j < ustensilTags.length; j++) {
      var ustensilTag = ustensilTags[j].toLowerCase();
      for (var k = 0; k < recipe.ustensils.length; k++) {
        var ustensil = recipe.ustensils[k].toLowerCase();
        if (ustensilTag === ustensil) {
          ustIsPresent.push(ustensilTag);
        }
      }
    }

    // filtre des noms de recettes
    var nameIsPresent = false;
    if (recipe.name.toLowerCase().match(searchInputLC)) {
      nameIsPresent = true;
    }

    // filtre des descriptions
    var descIsPresent = false;
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


  displayData(recipeFiltered);
  currentList = recipeFiltered;
}
