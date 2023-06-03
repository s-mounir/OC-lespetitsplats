function recipeFactory(data) {
  const {
    id, name, description, applicance, servings, time, ustensils, ingredients,
  } = data;
  function getRecipeCardDOM() {
    const recipeBlock = document.createElement('div');
    recipeBlock.classList.add('recipeBlock');

    const imgRecipe = document.createElement('div');
    imgRecipe.classList.add('imgRecipe');
    const recipeText = document.createElement('div');
    recipeText.classList.add('recipeText');

    const recipeName = document.createElement('h2');
    recipeName.classList.add('recipeName');
    recipeName.textContent = name;
    const recipeTime = document.createElement('p');
    recipeTime.classList.add('recipeTime');
    recipeTime.innerHTML = '<i class="fa-regular fa-clock"></i> ' + time +' min';
    const recipeIngredients = document.createElement('ul');
    recipeIngredients.classList.add('recipeIngredients');
    const recipeDetail = document.createElement('p');
    recipeDetail.classList.add('recipeDetail');
    recipeDetail.textContent = description;

    for (let i = 0; i < ingredients.length; i++) {
      const { ingredient, quantity, unit } = ingredients[i];
      const recipeIngredient = document.createElement('li');
      const unitExist = unit ? unit : '';
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
