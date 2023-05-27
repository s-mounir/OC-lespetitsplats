function openDropdown(filterElem, list) {
  const btn = document.querySelector('.btn' + filterElem);
  const div = document.querySelector('.div' + filterElem);
  const ul = document.querySelector('.list' + filterElem);
  btn.style.display = 'none';
  div.style.display = 'block';
  switch (filterElem) {
    case 'Ingredients':
      currentList.map((recipe) =>
        recipe.ingredients.map((elem) => list.push(elem.ingredient)));
      break;
    case 'Appareils':
      currentList.map((recipe) => list.push(recipe.appliance));
      break;
    case 'Ustensiles':
      currentList.map((recipe) =>
        recipe.ustensils.forEach((elem) => list.push(elem)));
      break;
    default:
      tagList = [];
  }
  const listUniq = [...new Set(list)];
  listUniq.forEach((element) => {
    const listElement = document.createElement('li');
    listElement.innerText = element;
    ul.append(listElement);
    listElement.addEventListener('click', () => addTag(element, filterElem));
  });
}

function closeDropdown(filterElem, list) {
  const btn = document.querySelector('.btn' + filterElem);
  const div = document.querySelector('.div' + filterElem);
  btn.style.display = 'block';
  div.style.display = 'none';

  const ul = document.querySelector('.list' + filterElem);
  ul.innerHTML = '';
  list = [];

  const search = document.querySelector('.searchBar' + filterElem);
  search.value = '';
}

function addTag(element, filterElem) {
  const tags = document.querySelector('.tags');
  const button = document.createElement('button');
  button.innerHTML = element + '<i class="fa-regular fa-circle-xmark"></i>';
  button.id = element;
  button.classList.add('tag');
  button.classList.add('tag' + filterElem);
  tags.append(button);
  button.addEventListener('click', () => removeTag(element, filterElem));
  let tagList;
  switch (filterElem) {
    case 'Ingredients':
      tagList = ingredientTags;
      break;
    case 'Appareils':
      tagList = appareilTags;
      break;
    case 'Ustensiles':
      tagList = ustensilTags;
      break;
    default:
      tagList = [];
  }
  tagList.push(element);
  filter(searchInput, ingredientTags, appareilTags, ustensilTags);
}

function removeTag(id, filterElem) {
  let tagList;
  switch (filterElem) {
    case 'Ingredients':
      tagList = ingredientTags;
      break;
    case 'Appareils':
      tagList = appareilTags;
      break;
    case 'Ustensiles':
      tagList = ustensilTags;
      break;
    default:
      tagList = [];
  }
  const element = document.getElementById(id);
  element.remove();

  const index = tagList.indexOf(id);
  tagList.splice(index, 1);
  filter(searchInput, ingredientTags, appareilTags, ustensilTags);

  if (searchInput === undefined && ingredientTags.length === 0
    && appareilTags.length === 0 && ustensilTags.length === 0) {
    init();
  }
}
