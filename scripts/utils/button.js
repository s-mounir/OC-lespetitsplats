let isDropdownIngredients = false;

function openDropdown() {
  console.log("j'ouvre");
  const btnIngredients = document.querySelector('.btnIngredients');
  const divIngredients = document.querySelector('.divIngredients');
  const ulIngredients = document.querySelector('.listIngredients');
  btnIngredients.style.display = 'none';
  divIngredients.style.display = 'block';
  currentList.map((recipe) =>
    recipe.ingredients.map((elem) => ingredientList.push(elem.ingredient)));
  const ingredientListUniq = [...new Set(ingredientList)];
  ingredientListUniq.forEach(element => {
    const listElement = document.createElement('li');
    listElement.innerText = element;
    ulIngredients.append(listElement);
    listElement.addEventListener('click', () => { console.log(element); });
  });
}

function closeDropdown() {
  console.log("je ferme");
  const btnIngredients = document.querySelector('.btnIngredients');
  const divIngredients = document.querySelector('.divIngredients');
  btnIngredients.style.display = 'block';
  divIngredients.style.display = 'none';

  const ulIngredients = document.querySelector('.listIngredients');
  ulIngredients.innerHTML = '';
  ingredientList = [];
}
