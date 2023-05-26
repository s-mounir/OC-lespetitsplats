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
    listElement.addEventListener('click', () => addTag(element));
  });
}

function closeDropdown() {
  const btnIngredients = document.querySelector('.btnIngredients');
  const divIngredients = document.querySelector('.divIngredients');
  btnIngredients.style.display = 'block';
  divIngredients.style.display = 'none';

  const ulIngredients = document.querySelector('.listIngredients');
  ulIngredients.innerHTML = '';
  ingredientList = [];

  const searchIngredients = document.querySelector('.searchBarIngredient');
  searchIngredients.value = '';
}

function addTag(element) {
  const tags = document.querySelector('.tags');
  const button = document.createElement('button');
  button.innerHTML = element + '<i class="fa-regular fa-circle-xmark"></i>';
  button.id = element;
  button.classList.add('tag');
  tags.append(button);
  button.addEventListener('click', () => removeTag(element));
  ingredientTags.push(element);
  filter(searchInput, ingredientTags);
}

function removeTag(id) {
  const element = document.getElementById(id);
  element.remove();

  const index = ingredientTags.indexOf(id);
  ingredientTags.splice(index, 1);
  filter(searchInput, ingredientTags);

  if (searchInput === undefined && ingredientTags.length === 0) {
    init();
  }
}
