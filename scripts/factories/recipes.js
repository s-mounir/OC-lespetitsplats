function recipeFactory(data) {
  var {
    id, name, description, applicance, servings, time, ustensils, ingredients,
  } = data;
  function getRecipeCardDOM() {
    var recipeBlock = document.createElement('div');
    recipeBlock.classList.add('recipeBlock');

    var imgRecipe = document.createElement('div');
    imgRecipe.classList.add('imgRecipe');
    var recipeText = document.createElement('div');
    recipeText.classList.add('recipeText');

    var recipeName = document.createElement('h2');
    recipeName.classList.add('recipeName');
    recipeName.textContent = name;
    var recipeTime = document.createElement('p');
    recipeTime.classList.add('recipeTime');
    recipeTime.innerHTML = '<i class="fa-regular fa-clock"></i> ' + time +' min';
    var recipeIngredients = document.createElement('ul');
    recipeIngredients.classList.add('recipeIngredients');
    var recipeDetail = document.createElement('p');
    recipeDetail.classList.add('recipeDetail');
    recipeDetail.textContent = description;

    for (var i = 0; i < ingredients.length; i++) {
      var { ingredient, quantity, unit } = ingredients[i];
      var recipeIngredient = document.createElement('li');
      var unitExist = unit ? unit : '';
      if (quantity) {
        recipeIngredient.innerHTML = '<span class="ingredientName">' + ingredient + ':</span> '+ quantity + ' ' + unitExist;
      } else {
        recipeIngredient.innerHTML = '<span class="ingredientName">' + ingredient + '</span> '
      }
      recipeIngredients.append(recipeIngredient);
    }

    recipeText.append(recipeName, recipeTime, recipeIngredients, recipeDetail);
    recipeBlock.append(imgRecipe, recipeText);
    return (recipeBlock);
  }
  return { getRecipeCardDOM };
}
