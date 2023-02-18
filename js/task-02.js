const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')

console.log(list)

const elements = ingredients.forEach(el => {
  const element = document.createElement('li');

  element.className = 'item';
  element.textContent = `${el}`;
  list.append(element);
  console.log(element);

})

