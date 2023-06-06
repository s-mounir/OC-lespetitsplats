function openDropdown(filterElem, list) {
  //close all dropdown before opening a new one
  var allBtn = document.querySelectorAll('.btn');
  var allDiv = document.querySelectorAll('.dropdownOpen');
  for (var i = 0; i < allDiv.length; i++) {
    var elem = allDiv[i];
    elem.style.display = 'none';
  }
  for (var i = 0; i < allBtn.length; i++) {
    var elem = allBtn[i];
    elem.style.display = 'block';
  }

  var btn = document.querySelector('.btn' + filterElem);
  var div = document.querySelector('.div' + filterElem);
  var ul = document.querySelector('.list' + filterElem);
  btn.style.display = 'none';
  div.style.display = 'block';
  switch (filterElem) {
    case 'Ingredients':
      for (var i = 0; i < currentList.length; i++) {
        var recipe = currentList[i];
        for (var j = 0; j < recipe.ingredients.length; j++) {
          var elem = recipe.ingredients[j];
          var upperCase = elem.ingredient.charAt(0).toUpperCase();
          var lowerCase = elem.ingredient.slice(1).toLowerCase();
          var capitalizedString = upperCase + lowerCase;
          list.push(capitalizedString);
        }
      }
      break;
    case 'Appareils':
      for (var i = 0; i < currentList.length; i++) {
        var recipe = currentList[i];
        var upperCase = recipe.appliance.charAt(0).toUpperCase();
        var lowerCase = recipe.appliance.slice(1).toLowerCase();
        var capitalizedString = upperCase + lowerCase;
        list.push(capitalizedString);
      }
      break;
    case 'Ustensiles':
      for (var i = 0; i < currentList.length; i++) {
        var recipe = currentList[i];
        for (var j = 0; j < recipe.ustensils.length; j++) {
          var elem = recipe.ustensils[j];
          var upperCase = elem.charAt(0).toUpperCase();
          var lowerCase = elem.slice(1).toLowerCase();
          var capitalizedString = upperCase + lowerCase;
          list.push(capitalizedString);
        }
      }
      break;
    default:
      tagList = [];
  }
  var listUniq = [];
  for (var i = 0; i < list.length; i++) {
    var isElemInList = false;
    for (var j = 0; j < listUniq.length; j++) {
      if (list[i] === listUniq[j]){
        isElemInList = true;
      }
    }
    if (!isElemInList) {
      listUniq.push(list[i]);
    }
  }
  for (var i = 0; i < listUniq.length; i++) {
    var listElement = document.createElement('li');
    listElement.innerText = listUniq[i];
    ul.append(listElement);
    listElement.addEventListener('click', () => addTag(listUniq[i], filterElem));
  }
}

function closeDropdown(filterElem, list) {
  var btn = document.querySelector('.btn' + filterElem);
  var div = document.querySelector('.div' + filterElem);
  btn.style.display = 'block';
  div.style.display = 'none';

  var ul = document.querySelector('.list' + filterElem);
  ul.innerHTML = '';
  list = [];

  var search = document.querySelector('.searchBar' + filterElem);
  search.value = '';
}

function addTag(element, filterElem) {
  var tags = document.querySelector('.tags');
  var button = document.createElement('button');
  button.innerHTML = element + '<i class="fa-regular fa-circle-xmark"></i>';
  button.id = element;
  button.classList.add('tag');
  button.classList.add('tag' + filterElem);
  tags.append(button);
  button.addEventListener('click', function() {removeTag(element, filterElem)});
  var tagList;
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
  console.log(element);
  filter(searchInput, ingredientTags, appareilTags, ustensilTags);
}

function removeTag(id, filterElem) {
  var tagList;
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
  var element = document.getElementById(id);
  element.remove();

  var index = tagList.indexOf(id);
  tagList.splice(index, 1);
  filter(searchInput, ingredientTags, appareilTags, ustensilTags);

  if (searchInput === undefined && ingredientTags.length === 0
    && appareilTags.length === 0 && ustensilTags.length === 0) {
    init();
  }
}

function filterTags(filterElem, elemList) {
  var searchElements = document.querySelector('.searchBar' + filterElem);
  searchElements.addEventListener('input', function(e) {{
    var element = e.target.value.toLowerCase();

    var ul = document.querySelector('.list' + filterElem);
    ul.innerHTML = '';
    var elemListFilter = [];
    for (var i = 0; i < elemList.length; i++) {
      var elem = elemList[i];
      if (elem.toLowerCase().match(element)) {
        elemListFilter.push(elem);
      }
    }
    var listUniq = [];
    for (var i = 0; i < elemListFilter.length; i++) {
      var isElemInList = false;
      for (var j = 0; j < listUniq.length; j++) {
        if (elemListFilter[i] === listUniq[j]){
          isElemInList = true;
        }
      }
      if (!isElemInList) {
        listUniq.push(elemListFilter[i]);
      }
    }
    for (var i = 0; i < listUniq.length; i++) {
      var listElement = document.createElement('li');
      listElement.innerText = listUniq[i];
      ul.append(listElement);
      listElement.addEventListener('click', function() {addTag(elem, filterElem)});
    }
  }});
}
